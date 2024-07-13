import colors from '../../colors/colors';
import indent from '../../indent/indent';
import options from '../../options/options';
import FunctionHandler from './FunctionHandler';

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

describe('FunctionHandler.format() with function body', () => {
	beforeEach(() => {
		options.showFunctionBody = true;
	});
	afterEach(() => options.reset());
	it('should handle function with no body', () => {
		const fn = function () {};
		const formatted = indent.removeAll(
			colors.unstyle(FunctionHandler.format(fn))
		);
		expect(formatted).toBe('function(){}');
	});
	it('should handle function with basic body', () => {
		const fn = function (a, b) {
			return a + b;
		};
		const formatted = indent.removeAll(
			colors.unstyle(FunctionHandler.format(fn))
		);
		expect(formatted).toBe('function(a,b){returna+b;}');
	});
	it('should handle native function body', () => {
		const fn = parseInt;
		const formatted = indent.removeAll(
			colors.unstyle(FunctionHandler.format(fn))
		);
		expect(formatted).toBe('functionparseInt(){[nativecode]}');
	});
});
