const colors = require('../../colors/colors.js');
const StringHandler = require('./StringHandler.js');

describe('StringHandler.test()', () => {
	it('should recognize String primitives', () => {
		const subject = 'a';
		expect(StringHandler.test(subject)).toBe(true);
	});
	it('should recognize String Objects', () => {
		const subject = new String(' ');
		expect(StringHandler.test(subject)).toBe(true);
	});
});

describe('StringHandler.format()', () => {
	it('should output double quotes', () => {
		const date = 'abc';
		const formatted = colors.uncolorize(StringHandler.format(date));
		expect(formatted).toBe('"abc"');
	});
	it('should output backticks on newline', () => {
		const date = 'abc\ndef';
		const formatted = colors.uncolorize(StringHandler.format(date));
		expect(formatted).toBe('`abc\ndef`');
	});
	it('should output backticks on carriage return', () => {
		const date = 'abc\rdef';
		const formatted = colors.uncolorize(StringHandler.format(date));
		expect(formatted).toBe('`abc\rdef`');
	});
});
