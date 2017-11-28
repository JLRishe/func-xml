const assert = require('assert');
const { compose, chain, head } = require('ramda');
const { allAttributes, allChildNodes, childEls } = require('..');
const initDoc = require('./shared/initDoc');
const { NS_PEOPLE } = require('./shared/constants');


describe('attribute tests', () => {
    let doc, l1Nodes, l2Nodes, characters;
    
    before(() => {
        doc = initDoc();
        l1Nodes = allChildNodes(doc);
        l2Nodes = chain(allChildNodes)(l1Nodes);
        characters = chain(childEls('character', NS_PEOPLE))(l2Nodes);
    });

    it('should retrieve all attributes', () =>{
        var harryAttribs = compose(allAttributes, head)(characters);
        
        var l3Attribs = chain(allAttributes)(characters);
        
        assert.equal(harryAttribs.length, 2);
        assert.equal(l3Attribs.length, 4);
    });
});