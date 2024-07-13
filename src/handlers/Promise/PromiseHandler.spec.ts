import colors from '../../colors/colors';
import PromiseHandler from './PromiseHandler';

describe('PromiseHandler.test()', () => {
	it('should recognize pending promises', () => {
		const subject = new Promise(() => {});
		expect(PromiseHandler.test(subject)).toBe(true);
	});
	it('should recognize fulfilled promises', () => {
		const subject = Promise.resolve(42);
		expect(PromiseHandler.test(subject)).toBe(true);
	});
	it('should not recognize POJOs', () => {
		const subject = {};
		expect(PromiseHandler.test(subject)).toBe(false);
	});
});

describe('PromiseHandler.format()', () => {
	it('should output new Date()', () => {
		const date = Promise.resolve(42);
		const formatted = colors.unstyle(PromiseHandler.format(date));
		expect(formatted).toBe('new Promise(() => {})');
	});
});
