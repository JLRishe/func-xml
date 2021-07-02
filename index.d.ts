export function isElement(node: Node): boolean;
export function isText(node: Node): boolean;
export function isAttribute(node: Node): boolean;
export function isDocumentNode(node: Node): boolean;

export function localName(node: Node): string;
export function namespaceUri(node: Node): string;

export function hasLocalName(localName: string): (node: Node) => boolean;
export function isInNamespace(uri: string): (node: Node) => boolean;
export function hasName(localName: string, uri: string): (node: Node) => boolean;

export function allChildNodes(node: Node): Node[];
export function childNodes(localName: string, namespaceURI: string = undefined): (node: Node) => Node[];

export function allChildEls(node: Node): Element[];
export function childEls(localName: string, namespaceURI: string = undefined): (node: Node) => Element[]

export function allAttributes(element: Element): Attr[];
export function attributes(localName: string, namespaceURI: string = undefined): (element: Element) => Attr[];
export function attribute(localName: string, namespaceURI: string = undefined): (element: Element) => Attr;

export function attributeValue(localName: string, namespaceURI: string = undefined): (element: Element) => string;

export function allDescendants(node: Node): Node[];
export function descendants(localName: string, namespaceURI: string): (node: Node) => Node[];