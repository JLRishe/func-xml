const { toArray } = require('./shared');
const { compose, prop, isNil, when, always, curry } = require('ramda');

module.exports = compose(toArray, when(isNil, always([])), prop('childNodes'));