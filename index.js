const express = require('express');
const session = require('express-session');
const http = require('http');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const { promisify } = require('es6-promisify');
const flash = require('connect-flash');
const bugsnag = require('@bugsnag/js');
const bugsnagExpress = require('@bugsnag/plugin-express');

require('dotenv').config();

// create our Express app
const app = express();

// set the port for the app
const port = process.env.PORT || 3000;

mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.MONGO_DB_URL);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 → ${err.message}`);
});

require('./models/User');

const routes = require('./routes/index');
const helpers = require('./helpers/helpers');
const errorHandlers = require('./helpers/errorHandlers');

// configure Bugsnag
const bugsnagClient = bugsnag(process.env.BUGSNAG_KEY);
bugsnagClient.use(bugsnagExpress);
const bugsnagMiddleware = bugsnagClient.getPlugin('express');

// setup passport
require('./helpers/passport');

if (process.env.NODE_ENV === 'production') {
  // setup bugsnag middleware
  app.use(bugsnagMiddleware.requestHandler);
}

// view engine setup
app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we use the pug engine

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));

// takes the raw requests and turns them into usable properties on req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// exposes a bunch of methods for validating data. Used heavily on userController.validateRegister
// app.use(expressValidator());

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

// sessions allow us to store data on visitors from request to request
// this keeps users logged in and allows us to send flash messages
app.use(session({
  secret: process.env.APP_SESSION_SECRET,
  key: process.env.APP_SESSION_KEY,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
}));

// Passport JS is what we use to handle our logins
app.use(passport.initialize());
app.use(passport.session());

// The flash middleware let's us use req.flash('error', 'Shit!'), which will then pass that message to the next page the user requests
app.use(flash());

// pass variables to our templates + all requests
app.use((req, res, next) => {
  res.locals.h = helpers;
  res.locals.flashes = req.flash();
  res.locals.user = req.user || null;
  res.locals.currentPath = req.path;
  if (process.env.NODE_ENV === 'production') {
    res.locals.bugsnagClient = bugsnagClient;
  }
  next();
});

// promisify some callback based APIs
app.use((req, res, next) => {
  req.login = promisify(req.login.bind(req));
  next();
});

// After allllll that above middleware, we finally handle our own routes!
app.use('/', routes);

if (app.get('env') === 'development') {
  // If that above routes didnt work, we 404 them and forward to error handler
  app.use(errorHandlers.notFound);
}
// One of our error handlers will see if these errors are just validation errors
app.use(errorHandlers.flashValidationErrors);

if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);
if (process.env.NODE_ENV === 'production') {
  app.use(bugsnagMiddleware.errorHandler);
}

const server = http.createServer(app);
server.listen(port, () => {
  console.info(`Express running → PORT ${server.address().port}`);
});
