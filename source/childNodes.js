import { compose, prop, isNil, when, always, filter } from 'ramda';
import { toArray } from './shared';
import { hasName } from './nodeNames';


const normalizeToArray = when(isNil, always([]));

const allChildNodes = compose(toArray, normalizeToArray, prop('childNodes'));
const childNodes = (localName, uri) => compose(filter(hasName(localName, uri)), allChildNodes);


export {
	allChildNodes,
	childNodes
};