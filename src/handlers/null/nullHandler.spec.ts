import colors from '../../colors/colors';
import nullHandler from './nullHandler';

describe('nullHandler.test()', () => {
	it('should recognize null', () => {
		const subject = null;
		expect(nullHandler.test(subject)).toBe(true);
	});
	it('should not recognize POJOs', () => {
		const subject = {};
		expect(nullHandler.test(subject)).toBe(false);
	});
	it('should not recognize undefined', () => {
		const subject = undefined;
		expect(nullHandler.test(subject)).toBe(false);
	});
});

describe('nullHandler.format()', () => {
	it('should output null', () => {
		const formatted = colors.unstyle(nullHandler.format());
		expect(formatted).toBe('null');
	});
});
