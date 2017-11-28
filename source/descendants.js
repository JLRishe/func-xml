import { compose, map, applySpec, identity, flatten, filter } from 'ramda';
import { allChildNodes, childNodes } from './childNodes';
import { hasName } from './nodeNames';

const allDescendants = node => compose(flatten, map(applySpec([identity, allDescendants])), allChildNodes)(node);
// doing this instead of filtering allDescendants in order to avoid building a huge array and filtering it
const descendants = 
    (localName, uri) => node => compose(flatten, applySpec([filter(hasName(localName, uri)), map(descendants(localName, uri))]), allChildNodes)(node);

export {
	allDescendants,
	descendants
};