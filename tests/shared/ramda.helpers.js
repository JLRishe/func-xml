const { chain, composeWith } = require('ramda');

const composeK = composeWith(chain);

module.exports = {
    composeK,
};