import colors from '../../colors/colors';
import URLHandler from './URLHandler';

describe('URLHandler.test()', () => {
	it('should recognize URL', () => {
		const subject = new URL('https://example.com/0');
		expect(URLHandler.test(subject)).toBe(true);
	});
	it('should not confuse with Objects', () => {
		const subject = {};
		expect(URLHandler.test(subject)).toBe(false);
	});
});

describe('URLHandler.format()', () => {
	it('should output full href', () => {
		const url = new URL('https://example.com/a');
		const result = colors.unstyle(URLHandler.format(url));
		expect(result).toBe('new URL("https://example.com/a")');
	});
});
