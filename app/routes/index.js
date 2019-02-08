const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const { catchErrors } = require('../helpers/errorHandlers');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/register', userController.registerForm);
router.post('/register', userController.validateRegister, catchErrors(userController.register), authController.login);
router.get('/login', userController.loginForm);
router.post('/login', userController.validateLogin, authController.login);
router.get('/loggedIn', authController.isLoggedIn, authController.loggedIn);
router.get('/logout', authController.logout);

router.get('/account', authController.isLoggedIn, userController.account);
router.post('/account', authController.isLoggedIn, catchErrors(userController.updateAccount));
router.post('/account/forgot', userController.validateEmail, catchErrors(authController.forgot));
router.get('/account/reset/:token', catchErrors(authController.reset));
router.post('/account/reset/:token', authController.confirmedPasswords, catchErrors(authController.update));

router.get('/notifications', authController.isLoggedIn, userController.notifications)

// router.get('/api/search', catchErrors(storeController.searchStores));

module.exports = router;
