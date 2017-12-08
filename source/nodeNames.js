import { compose, prop, equals, both, when, always, either, isNil } from 'ramda';
import { LOCAL_NAME, NAMESPACE_URI } from './shared/constants';

const normalizeToNull = when(either(equals(''), isNil), always(null));

const localName = prop(LOCAL_NAME);
const namespaceUri = compose(normalizeToNull, prop(NAMESPACE_URI));

const hasLocalName = name => compose(equals(name), localName);
const inNamespace = uri => compose(equals(normalizeToNull(uri)), namespaceUri);
const hasName = (localName, uri) => both(hasLocalName(localName), inNamespace(uri));

export {
    localName,
    namespaceUri,
    
    hasLocalName,
    inNamespace,
    hasName
};