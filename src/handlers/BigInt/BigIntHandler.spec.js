const colors = require('../../colors.js');
const BigIntHandler = require('./BigIntHandler.js');

describe('BigIntHandler.test()', () => {
	it('should recognize integers', () => {
		const subject = 42n;
		expect(BigIntHandler.test(subject)).toBe(true);
	});
	it('should not recognize numbers', () => {
		const subject = 42;
		expect(BigIntHandler.test(subject)).toBe(false);
	});
});

describe('BigIntHandler.format()', () => {
	it('should output integers', () => {
		const number = 42n;
		const formatted = colors.uncolorize(BigIntHandler.format(number));
		expect(formatted).toBe('42n');
	});
});
