import { curry, whereEq, equals, bind } from 'ramda';

const toArray = bind(Array.from, Array);
const propEq = curry((propName, value) => whereEq({ [propName]: value }));

export { toArray, propEq };