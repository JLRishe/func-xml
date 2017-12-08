const assert = require('assert');
const { composeK, chain } = require('ramda');
const initDoc = require('./shared/initDoc');
const { allChildEls, childEls } = require('..');
const { NS_SERIES, NS_PEOPLE } = require('./shared/constants');

describe('child elements', () => {
	const doc = initDoc();

	it('should return all child elements', () => {
		const result = composeK(allChildEls, allChildEls, allChildEls)(doc);
		
		assert.equal(result.length, 3);
		assert.equal(result[0].getAttribute('name'), 'Harry Potter');
	});	

	it('should select child elements by name', () => {
		const level2Els = composeK(allChildEls, allChildEls)(doc);
		
		const peopleCharacter = childEls('character', NS_PEOPLE);
		const peopleCharacters = childEls('characters', NS_PEOPLE);
		const seriesCharacter = childEls('character', NS_SERIES);
		
		const peopleCharacterResult = chain(peopleCharacter, level2Els);
		
		assert.equal(peopleCharacterResult.length, 2, 'peopleCharacter');
		assert.equal(peopleCharacterResult[0].getAttribute('name'), 'Harry Potter', 'peopleCharacter');
		
		assert.equal(chain(peopleCharacters)(level2Els).length, 0, 'peopleCharacters');
		assert.equal(chain(seriesCharacter)(level2Els).length, 0, 'peopleCharacters');
		
	});	
	
});