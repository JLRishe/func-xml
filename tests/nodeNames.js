const assert = require('assert');
const initDoc = require('./shared/initDoc');
const { chain } = require('ramda');
const { localName, namespaceUri, hasLocalName, inNamespace, hasName, allChildNodes } = require('../source');
const { NS_SERIES, NS_PEOPLE } = require('./shared/constants');

describe('node name tests', () => {
	const doc = initDoc();
	const l1Nodes = allChildNodes(doc);
	const l2Nodes = chain(allChildNodes)(l1Nodes);
	const topEl = l1Nodes[0];
	const firstL2El = l2Nodes[1];

	it('should determine local names', () => {
		assert.equal(localName(topEl), 'series');
		assert.equal(localName(firstL2El), 'characters');
	});
	
	it('should test local names', () => {
		assert.equal(true, hasLocalName('series')(topEl));
		assert.equal(false, hasLocalName('book')(topEl));
		
		assert.equal(true, hasLocalName('characters')(firstL2El));
	});
	
	it('should determine namespaces', () => {
		assert.equal(namespaceUri(topEl), NS_SERIES);
		assert.equal(namespaceUri(firstL2El), NS_PEOPLE);
	});
	
	it('should test namespaces', () => {
		const inSeries = inNamespace(NS_SERIES);
		const inPeople = inNamespace(NS_PEOPLE);
		
		assert.equal(inSeries(topEl), true);
		assert.equal(inPeople(topEl), false);
		
		assert.equal(inPeople(firstL2El), true);
		assert.equal(inSeries(firstL2El), false);
	});
	
	it('should test names', () => {
		const seriesSeries = hasName('series', NS_SERIES);
		const peopleCharacters = hasName('characters', NS_PEOPLE);
		const peopleSeries = hasName('series', NS_PEOPLE);
		
		assert.equal(seriesSeries(topEl),true);
		assert.equal(peopleCharacters(topEl), false);
		assert.equal(peopleSeries(topEl), false);
		
		assert.equal(seriesSeries(firstL2El),false);
		assert.equal(peopleCharacters(firstL2El), true);
		assert.equal(peopleSeries(firstL2El), false);
	});
});