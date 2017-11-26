const { curry, whereEq, equals, bind } = require('ramda');

module.exports = {
	toArray: bind(Array.from, Array),
	propEq: curry((propName, value) => whereEq({ [propName]: value }))
};