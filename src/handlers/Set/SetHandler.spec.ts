import colors from '../../colors/colors';
import indent from '../../indent/indent';
import SetHandler from './SetHandler';

describe('SetHandler.test()', () => {
	it('should recognize empty sets', () => {
		const subject = new Set();
		expect(SetHandler.test(subject)).toBe(true);
	});
	it('should recognize non-empty set', () => {
		const subject = new Set(['a', 'b', 'c']);
		expect(SetHandler.test(subject)).toBe(true);
	});
	it('should not confuse with array', () => {
		const subject = [];
		expect(SetHandler.test(subject)).toBe(false);
	});
	it('should not confuse with Objects', () => {
		const subject = {};
		expect(SetHandler.test(subject)).toBe(false);
	});
});

describe('SetHandler.format()', () => {
	const walk = JSON.stringify;
	it('should output array with numbers', () => {
		const set = [1, 2, 3];
		const result = SetHandler.format(set, 0, false, indent, walk);
		const formatted = indent.removeAll(colors.unstyle(result));
		expect(formatted).toBe('newSet([1,2,3])');
	});
	it('should handle empty arrays', () => {
		const set = new Set([]);
		const result = SetHandler.format(set, 0, false, indent, walk);
		const formatted = indent.removeAll(colors.unstyle(result));
		expect(formatted).toBe('newSet([])');
	});
	it('should handle circular references', () => {
		const set = new Set([]);
		const result = SetHandler.format(set, 0, true, indent, walk);
		const formatted = indent.removeAll(colors.unstyle(result));
		expect(formatted).toBe('newSet(/*CircularReference*/)');
	});
});
