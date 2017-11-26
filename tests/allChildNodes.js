const assert = require('assert');
const { composeK } = require('ramda');
const initDoc = require('./shared/initDoc');
const { allChildNodes } = require('../source');

describe('allChildNodes', () => {
	it('should return all child nodes', () => {
		const doc = initDoc();
		const result = composeK(allChildNodes, allChildNodes, allChildNodes)(doc);
		
		assert.equal(5, result.length);
		assert.equal('Harry Potter', result[1].getAttribute('name'));
	});	
});