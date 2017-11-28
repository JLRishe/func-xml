import { compose, filter } from 'ramda';
import { allChildNodes } from './childNodes';
import { isElement } from './nodeTypeTests';
import { hasName } from './nodeNames';

const allChildEls = compose(filter(isElement), allChildNodes);
const childEls = (localName, uri) => compose(filter(hasName(localName, uri)), allChildEls);

export {
	allChildEls,
	childEls
};