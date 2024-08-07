import colors from '../../colors/colors';
import ErrorHandler from './ErrorHandler';

describe('ErrorHandler.test()', () => {
	it('should recognize Errors', () => {
		const subject = new Error('a');
		expect(ErrorHandler.test(subject)).toBe(true);
	});
	it('should recognize Errors with no message', () => {
		const subject = new Error();
		expect(ErrorHandler.test(subject)).toBe(true);
	});
});

describe('ErrorHandler.format()', () => {
	it('should output double quotes', () => {
		const err = new Error('abc');
		const formatted = colors.unstyle(ErrorHandler.format(err));
		expect(formatted).toBe('new Error("abc")');
	});
	it('should handle Errors with no message', () => {
		const err = new Error();
		const formatted = colors.unstyle(ErrorHandler.format(err));
		expect(formatted).toBe('new Error("")');
	});
	it('should output backticks on newline', () => {
		const err = new Error('abc\ndef');
		const formatted = colors.unstyle(ErrorHandler.format(err));
		expect(formatted).toBe('new Error(`abc\ndef`)');
	});
	it('should output backticks on carriage return', () => {
		const err = new Error('abc\rdef');
		const formatted = colors.unstyle(ErrorHandler.format(err));
		expect(formatted).toBe('new Error(`abc\rdef`)');
	});
});
