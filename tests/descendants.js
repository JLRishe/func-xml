const assert = require('assert');
const initDoc = require('./shared/initDoc');
const { allDescendants, descendants } = require('..');
const { NS_SERIES, NS_PEOPLE } = require('./shared/constants');

describe('descendants', () => {
	const doc = initDoc();

	it('should return all descendants', () => {
		const result = allDescendants(doc);
		
		assert.equal(result.length, 9);
	});	

	it('should select descendants by name', () => {
		const peopleCharacter = descendants('character', NS_PEOPLE);
		const peopleCharacters = descendants('characters', NS_PEOPLE);
		const seriesCharacter = descendants('character', NS_SERIES);
		
		const peopleCharacterResult = peopleCharacter(doc);
		
		assert.equal(peopleCharacterResult.length, 2, 'peopleCharacter');
		assert.equal(peopleCharacterResult[0].getAttribute('name'), 'Harry Potter', 'peopleCharacter');
		
		assert.equal(peopleCharacters(doc).length, 1, 'peopleCharacters');
		
		assert.equal(seriesCharacter(doc).length, 0, 'seriesCharacter');
	});		
});