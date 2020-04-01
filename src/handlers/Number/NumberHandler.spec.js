const colors = require('../../colors/colors.js');
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
	it('should recognize NaN', () => {
		const subject = NaN;
		expect(NumberHandler.test(subject)).toBe(true);
	});
	it('should recognize Infinity', () => {
		const subject = Infinity;
		expect(NumberHandler.test(subject)).toBe(true);
	});
	it('should recognize -Infinity', () => {
		const subject = -Infinity;
		expect(NumberHandler.test(subject)).toBe(true);
	});
	it('should recognize 0', () => {
		const subject = 0;
		expect(NumberHandler.test(subject)).toBe(true);
	});
	it('should recognize -0', () => {
		const subject = -0;
		expect(NumberHandler.test(subject)).toBe(true);
	});
	it('should handle number objects', () => {
		const subject = new Number(42);
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
		const formatted = colors.unstyle(NumberHandler.format(number));
		expect(formatted).toBe('42');
	});
	it('should output floats', () => {
		const number = 42.5;
		const formatted = colors.unstyle(NumberHandler.format(number));
		expect(formatted).toBe('42.5');
	});
});
