import colors from '../../colors/colors';
import BigIntHandler from './BigIntHandler';

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
		const formatted = colors.unstyle(BigIntHandler.format(number));
		expect(formatted).toBe('42n');
	});
});
