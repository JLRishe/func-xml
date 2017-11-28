import { compose, curry, whereEq, equals, bind, when, isNil, always } from 'ramda';

const toArray = alo => Array.prototype.slice.call(alo);
const coalesceArray = compose(toArray, when(isNil, always([])));

const propEq = curry((propName, value) => whereEq({ [propName]: value }));

export { 
    toArray,
    coalesceArray,
    propEq 
};