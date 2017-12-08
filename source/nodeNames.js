import { compose, prop, equals, both, when, always, either, isNil } from 'ramda';
import { normalizeToNull } from './shared';
import { LOCAL_NAME, NAMESPACE_URI } from './shared/constants';

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