const colors = require('../../colors.js');
const NumberHandler = require('./NumberHandler.js');

describe('NumberHandler.test()', () => {
	it('should recognize integers', () => {
		const subject = 42;
		expect(NumberHandler.test(subject)).toBe(true);
	});
	it('should recognize floats', () => {
		const subject = 42.5;
		expect(NumberHandler.test(subject)).toBe(true);
	});
	it('should recognize scientific notation', () => {
		const subject = 4e2;
		expect(NumberHandler.test(subject)).toBe(true);
	});
	it('should not recognize numeric strings', () => {
		const subject = '42';
		expect(NumberHandler.test(subject)).toBe(false);
	});
});

describe('NumberHandler.format()', () => {
	it('should output integers', () => {
		const number = 42;
		const formatted = colors.uncolorize(NumberHandler.format(number));
		expect(formatted).toBe('42');
	});
	it('should output floats', () => {
		const number = 42.5;
		const formatted = colors.uncolorize(NumberHandler.format(number));
		expect(formatted).toBe('42.5');
	});
});