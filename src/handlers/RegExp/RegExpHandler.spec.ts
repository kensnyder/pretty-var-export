import colors from '../../colors/colors';
import RegExpHandler from './RegExpHandler';

describe('RegExpHandler.test()', () => {
	it('should recognize dates', () => {
		const subject = /abc/gi;
		expect(RegExpHandler.test(subject)).toBe(true);
	});
	it('should not recognize POJOs', () => {
		const subject = {};
		expect(RegExpHandler.test(subject)).toBe(false);
	});
});

describe('RegExpHandler.format()', () => {
	it('should output RegExp literal', () => {
		const date = /abc/;
		const formatted = colors.unstyle(RegExpHandler.format(date));
		expect(formatted).toBe('/abc/');
	});
	it('should output RegExp literal with flags', () => {
		const date = /abc/gi;
		const formatted = colors.unstyle(RegExpHandler.format(date));
		expect(formatted).toBe('/abc/gi');
	});
});
