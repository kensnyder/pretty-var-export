import colors from '../../colors/colors';
import options from '../../options/options';
import StringHandler from './StringHandler';

describe('StringHandler.test()', () => {
	it('should recognize String primitives', () => {
		const subject = 'a';
		expect(StringHandler.test(subject)).toBe(true);
	});
	it('should recognize String Objects', () => {
		const subject = new String(' ');
		expect(StringHandler.test(subject)).toBe(true);
	});
});

describe('StringHandler.format()', () => {
	it('should output double quotes', () => {
		const date = 'abc';
		const formatted = colors.unstyle(StringHandler.format(date));
		expect(formatted).toBe('"abc"');
	});
	it('should output backticks on newline', () => {
		const date = 'abc\ndef';
		const formatted = colors.unstyle(StringHandler.format(date));
		expect(formatted).toBe('`abc\ndef`');
	});
	it('should output backticks on carriage return', () => {
		const date = 'abc\rdef';
		const formatted = colors.unstyle(StringHandler.format(date));
		expect(formatted).toBe('`abc\rdef`');
	});
	it('should avoid backticks if set such', () => {
		options.preferBackticks = false;
		const date = 'abc\rdef';
		const formatted = colors.unstyle(StringHandler.format(date));
		expect(formatted).toBe('"abc\\rdef"');
		options.reset();
	});
});

describe('StringHandler.format() with options.quoteStyle', () => {
	beforeEach(() => options.reset());
	it('should output single quotes', () => {
		options.quoteStyle = 'single';
		const date = 'def';
		const formatted = colors.unstyle(StringHandler.format(date));
		expect(formatted).toBe("'def'");
	});
	it('should output backtick quotes', () => {
		options.quoteStyle = 'backtick';
		const date = 'ghi';
		const formatted = colors.unstyle(StringHandler.format(date));
		expect(formatted).toBe('`ghi`');
	});
});

describe('StringHandler overages', () => {
	beforeEach(() => options.reset());
	it('should use ellipsis', () => {
		options.maxStringLength = 7;
		const alphabet = 'abcdefghijklmnopqrstuvwxyz';
		const formatted = colors.unstyle(StringHandler.format(alphabet));
		expect(formatted).toBe('"abcdefg"/* ... +19 chars */');
	});
});
