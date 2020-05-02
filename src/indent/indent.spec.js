const indent = require('./indent.js');
const options = require('../options/options.js');

describe('indent()', () => {
	it('should return empty string for level 0', () => {
		expect(indent(0)).toBe('');
	});
	it('should use options._indentChars', () => {
		const chars = options._indentChars;
		expect(indent(2)).toBe(chars + chars);
	});
	it('should allow changing indent chars', () => {
		options.indent = '\t';
		expect(indent(2)).toBe('\t\t');
		options.reset();
	});
});
describe('indent.removeAll()', () => {
	it('remove all', () => {
		expect(indent.removeAll('    hi\n    there')).toBe('hithere');
	});
});
describe('indent.toSpaces()', () => {
	it('remove all', () => {
		expect(indent.toSpaces('    hi\n    there')).toBe(' hi there');
	});
});
