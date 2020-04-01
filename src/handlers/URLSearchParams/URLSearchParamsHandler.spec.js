const colors = require('../../colors/colors.js');
const URLSearchParamsHandler = require('./URLSearchParamsHandler.js');

describe('URLSearchParamsHandler.test()', () => {
	it('should recognize empty object', () => {
		const subject = new URLSearchParams();
		expect(URLSearchParamsHandler.test(subject)).toBe(true);
	});
	it('should recognize non-empty object', () => {
		const subject = new URLSearchParams('a=1&b=2');
		expect(URLSearchParamsHandler.test(subject)).toBe(true);
	});
	it('should not confuse with Objects', () => {
		const subject = {};
		expect(URLSearchParamsHandler.test(subject)).toBe(false);
	});
});

describe('URLSearchParamsHandler.format()', () => {
	it('should output params', () => {
		const params = new URLSearchParams({ a: 1, b: 2 });
		const result = URLSearchParamsHandler.format(params);
		const formatted = colors.unstyle(result);
		expect(formatted).toBe('new URLSearchParams("a=1&b=2")');
	});
});
