/**
 * Array of valid keys in a block type settings deprecation object.
 *
 * @type {string[]}
 */
export const DEPRECATED_ENTRY_KEYS = [
	'attributes',
	'supports',
	'save',
	'migrate',
	'isEligible',
	'apiVersion',
];

export const __EXPERIMENTAL_STYLE_PROPERTY = {
	'--wp--style--color--link': [ 'color', 'link' ],
	background: [ 'color', 'gradient' ],
	backgroundColor: [ 'color', 'background' ],
	color: [ 'color', 'text' ],
	fontSize: [ 'typography', 'fontSize' ],
	fontStyle: [ 'typography', 'fontStyle' ],
	fontWeight: [ 'typography', 'fontWeight' ],
	lineHeight: [ 'typography', 'lineHeight' ],
	textDecoration: [ 'typography', 'textDecoration' ],
	textTransform: [ 'typography', 'textTransform' ],
	paddingBottom: [ 'spacing', 'padding', 'bottom' ],
	paddingLeft: [ 'spacing', 'padding', 'left' ],
	paddingRight: [ 'spacing', 'padding', 'right' ],
	paddingTop: [ 'spacing', 'padding', 'top' ],
	fontFamily: [ 'typography', 'fontFamily' ],
};
