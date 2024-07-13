import colors from '../../colors/colors.ts';
import indent from '../../indent/indent.ts';
import options from '../../options/options.ts';
import ArrayHandler from './ArrayHandler.ts';

describe('ArrayHandler.test()', () => {
	it('should recognize empty array', () => {
		const subject = [];
		expect(ArrayHandler.test(subject)).toBe(true);
	});
	it('should recognize non-empty array', () => {
		const subject = ['a', 'b', 'c'];
		expect(ArrayHandler.test(subject)).toBe(true);
	});
	it('should not confuse with arguments', () => {
		const subject = (function (a, b) {
			return arguments;
		})(1, 2);
		expect(ArrayHandler.test(subject)).toBe(false);
	});
	it('should not confuse with Objects', () => {
		const subject = {};
		expect(ArrayHandler.test(subject)).toBe(false);
	});
});

describe('ArrayHandler.format()', () => {
	const walk = v => v;
	it('should output array with numbers', () => {
		const arr = [1, 2, 3];
		const result = ArrayHandler.format(arr, 0, false, indent, walk);
		const formatted = indent.removeAll(colors.unstyle(result));
		expect(formatted).toBe('[1,2,3]');
	});
	it('should handle empty arrays', () => {
		const arr = [];
		const result = ArrayHandler.format(arr, 0, false, indent, walk);
		const formatted = indent.removeAll(colors.unstyle(result));
		expect(formatted).toBe('[]');
	});
});

describe('ArrayHandler circular reference', () => {
	it('should use ellipsis', () => {
		const formatted = colors.unstyle(ArrayHandler.format([1], 0, true));
		expect(formatted).toBe('[ /* Circular Reference */ ]');
	});
});

describe('ArrayHandler overages', () => {
	beforeEach(() => options.reset());
	it('should use ellipsis', () => {
		const walk = n => n;
		options.maxListItems = 2;
		const numbers = [1, 2, 3, 4, 5];
		const formatted = indent.removeAll(
			colors.unstyle(ArrayHandler.format(numbers, 0, false, indent, walk))
		);
		expect(formatted).toBe('[1,2/*...+3items*/]');
	});
});
