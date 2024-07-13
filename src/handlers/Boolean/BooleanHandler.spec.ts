import colors from '../../colors/colors';
import BooleanHandler from './BooleanHandler';

describe('BooleanHandler.test()', () => {
	it('should recognize true', () => {
		const subject = true;
		expect(BooleanHandler.test(subject)).toBe(true);
	});
	it('should recognize false', () => {
		const subject = false;
		expect(BooleanHandler.test(subject)).toBe(true);
	});
	it('should recognize object true', () => {
		const subject = new Boolean(true);
		expect(BooleanHandler.test(subject)).toBe(true);
	});
	it('should recognize object false', () => {
		const subject = new Boolean(false);
		expect(BooleanHandler.test(subject)).toBe(true);
	});
});

describe('BooleanHandler.format()', () => {
	it('should output true', () => {
		const bool = true;
		const formatted = colors.unstyle(BooleanHandler.format(bool));
		expect(formatted).toBe('true');
	});
	it('should output false', () => {
		const bool = false;
		const formatted = colors.unstyle(BooleanHandler.format(bool));
		expect(formatted).toBe('false');
	});
	it('should output Boolean object true', () => {
		const bool = new Boolean(true);
		const formatted = colors.unstyle(BooleanHandler.format(bool));
		expect(formatted).toBe('true');
	});
	it('should output Boolean object false', () => {
		const bool = new Boolean(false);
		const formatted = colors.unstyle(BooleanHandler.format(bool));
		expect(formatted).toBe('false');
	});
});
