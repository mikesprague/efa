const mongoose = require('mongoose');
const md5 = require('md5');
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [
      validator.isEmail,
      'Invalid Email Address',
    ],
    required: 'Please supply an email address',
  },
  phone: {
    type: String,
    validate: {
      validator: v => /\d{3}-\d{3}-\d{4}/.test(v),
      message: 'Invalid Phone Number',
    },
    required: 'Please supply a mobile phone number',
  },
  name: {
    type: String,
    required: 'Please supply a name',
    trim: true,
  },
  isFoodInsecure: {
    type: Boolean,
    default: false,
  },
  foodExclusions: [String],
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  permissions: {
    type: Number,
    default: 30,
  },
  // hearts: [
  //   { type: mongoose.Schema.ObjectId, ref: 'Store' },
  // ],
});

userSchema.statics.getFoodExclusionsList = function () {
  return this.aggregate([
    // all mongo aggregate pipeline operators begin with $
    { $unwind: '$foodExclusions' }, // $foodExclusions note: $ denotes foodExclusions is a field on the document
    { $group: { _id: '$foodExclusions', count: { $sum: 1 } } }, // group by $tag values, place into object as property '_id', add count attributee and increase by 1 for each tag
    { $sort: { count: -1 } }, // 1/-1 on $sort is ascending/descending
  ]);
};

userSchema.virtual('gravatar').get(function() {
  return `https://gravatar.com/avatar/${md5(this.email)}?s=200`;
});

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
userSchema.plugin(mongodbErrorHandler);

userSchema.index({
  phone: 'text',
  isFoodInsecure: 'boolean',
});

module.exports = mongoose.model('User', userSchema);
