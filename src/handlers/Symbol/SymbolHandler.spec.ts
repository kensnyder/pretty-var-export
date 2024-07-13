import colors from '../../colors/colors';
import SymbolHandler from './SymbolHandler';

describe('SymbolHandler.test()', () => {
	it('should handle description', () => {
		const subject = Symbol('a');
		expect(SymbolHandler.test(subject)).toBe(true);
	});
	it('should handle undefined description', () => {
		const subject = Symbol();
		expect(SymbolHandler.test(subject)).toBe(true);
	});
});

describe('SymbolHandler.format()', () => {
	it('should output double quotes', () => {
		const symbol = Symbol('a');
		const formatted = colors.unstyle(SymbolHandler.format(symbol));
		expect(formatted).toBe('Symbol("a")');
	});
	it('should handle undefined description', () => {
		const symbol = Symbol();
		const formatted = colors.unstyle(SymbolHandler.format(symbol));
		expect(formatted).toBe('Symbol()');
	});
	it('should output backticks on newline', () => {
		const symbol = Symbol('abc\ndef');
		const formatted = colors.unstyle(SymbolHandler.format(symbol));
		expect(formatted).toBe('Symbol(`abc\ndef`)');
	});
	it('should output backticks on carriage return', () => {
		const symbol = Symbol('abc\rdef');
		const formatted = colors.unstyle(SymbolHandler.format(symbol));
		expect(formatted).toBe('Symbol(`abc\rdef`)');
	});
});
