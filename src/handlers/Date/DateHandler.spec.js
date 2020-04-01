const colors = require('../../colors/colors.js');
const DateHandler = require('./DateHandler.js');

describe('DateHandler.test()', () => {
	it('should recognize dates', () => {
		const subject = new Date();
		expect(DateHandler.test(subject)).toBe(true);
	});
	it('should not recognize POJOs', () => {
		const subject = {};
		expect(DateHandler.test(subject)).toBe(false);
	});
});

describe('DateHandler.format()', () => {
	it('should output new Date()', () => {
		const date = new Date('2020-06-07T08:09:10.112');
		const formatted = colors.unstyle(DateHandler.format(date));
		expect(formatted).toBe('new Date("2020-06-07T08:09:10.112")');
	});
	it('should handle invalid dates', () => {
		const date = new Date('abc');
		const formatted = colors.unstyle(DateHandler.format(date));
		expect(formatted).toBe('new Date("Invalid Date")');
	});
});
