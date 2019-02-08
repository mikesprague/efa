// Day.js 2KB immutable date library alternative to Moment.js with the same modern API
// we need this in our templates to display things like "Posted 5 minutes ago"
const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
// const advancedFormat = require('dayjs/plugin/advancedFormat');
// const isLeapYear = require('dayjs/plugin/relativeTime');
// const weekOfYear = require('dayjs/plugin/weekOfYear');
// const isBetween = require('dayjs/plugin/isBetween');
// const isSameOrAfter = require('dayjs/plugin/isSameOrAfter');
// const isSameOrBefore = require('dayjs/plugin/isSameOrBefore');

dayjs.extend(relativeTime);
// dayjs.extend(advancedFormat);
// dayjs.extend(isLeapYear);
// dayjs.extend(weekOfYear);
// dayjs.extend(isBetween);
// dayjs.extend(isSameOrAfter);
// dayjs.extend(isSameOrBefore);

exports.dayjs = dayjs;

exports.exclusionChoices = ['No Exclusions', 'Meat', 'Seafood', 'Dairy', 'Gluten', 'Nuts'];

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = obj => JSON.stringify(obj, null, 2);

// Making a static map is really long - this is a handy helper function to make one
exports.staticMap = ([lng, lat]) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x150&key=${process.env.GOOGLE_MAPS_API_KEY}&markers=${lat},${lng}&scale=2`;

// Some details about the site
exports.siteName = 'Extra Food Notifications';
