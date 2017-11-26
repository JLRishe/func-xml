const assert = require('assert');
const { composeK } = require('ramda');
const initDoc = require('./shared/initDoc');
const { allChildNodes, childNodes } = require('../source');
const { NS_SERIES, NS_PEOPLE } = require('./shared/constants');

describe('child nodes', () => {
	const doc = initDoc();

	it('should return all child nodes', () => {
		const result = composeK(allChildNodes, allChildNodes, allChildNodes)(doc);
		
		assert.equal(5, result.length);
		assert.equal('Harry Potter', result[1].getAttribute('name'));
	});	

	it('should select child nodes by name', () => {
		const topNode = allChildNodes(doc)[0];
		
		const peopleCharacters = childNodes('characters', NS_PEOPLE);
		const seriesCharacters = childNodes('characters', NS_SERIES);
		const peopleSeries = childNodes('series', NS_PEOPLE);
		
		assert.equal(peopleCharacters(topNode).length, 1, 'peopleCharacters');
		assert.equal(seriesCharacters(topNode).length, 0, 'seriesCharacters');
		assert.equal(peopleSeries(topNode).length, 0, 'peopleSeries');
	});	
	
});