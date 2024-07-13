import colors from '../../colors/colors';
import undefinedHandler from './undefinedHandler';

describe('undefinedHandler.test()', () => {
	it('should recognize undefined', () => {
		const subject = undefined;
		expect(undefinedHandler.test(subject)).toBe(true);
	});
	it('should not recognize null', () => {
		const subject = null;
		expect(undefinedHandler.test(subject)).toBe(false);
	});
	it('should not recognize false', () => {
		const subject = false;
		expect(undefinedHandler.test(subject)).toBe(false);
	});
	it('should not recognize 0', () => {
		const subject = 0;
		expect(undefinedHandler.test(subject)).toBe(false);
	});
});

describe('undefinedHandler.format()', () => {
	it('should output undefined', () => {
		const formatted = colors.unstyle(undefinedHandler.format());
		expect(formatted).toBe('undefined');
	});
});
