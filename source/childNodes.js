import { compose, prop, isNil, when, always, filter } from 'ramda';
import { toArray, coalesceArray } from './shared';
import { hasName } from './nodeNames';


const allChildNodes = compose(coalesceArray, prop('childNodes'));
const childNodes = (localName, uri) => compose(filter(hasName(localName, uri)), allChildNodes);


export {
    allChildNodes,
    childNodes
};