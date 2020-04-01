const colors = require('../../colors/colors.js');
const FunctionHandler = require('./FunctionHandler.js');

describe('FunctionHandler.test()', () => {
	it('should recognize function literals', () => {
		const subject = function () {};
		expect(FunctionHandler.test(subject)).toBe(true);
	});
	it('should recognize arrow function literals', () => {
		const subject = () => {};
		expect(FunctionHandler.test(subject)).toBe(true);
	});
	it('should recognize function objects', () => {
		const subject = new Function('a, b', 'return a + b');
		expect(FunctionHandler.test(subject)).toBe(true);
	});
	it('should not recognize objects', () => {
		const subject = {};
		expect(FunctionHandler.test(subject)).toBe(false);
	});
});

describe('FunctionHandler.format()', () => {
	it('should handle function with no body', () => {
		const fn = function () {};
		const formatted = colors.unstyle(FunctionHandler.format(fn));
		expect(formatted).toBe('function() { /* Code Omitted */ }');
	});
	it('should handle built-in function', () => {
		const fn = parseInt;
		const formatted = colors.unstyle(FunctionHandler.format(fn));
		expect(formatted).toBe('function() { /* Code Omitted */ }');
	});
});
