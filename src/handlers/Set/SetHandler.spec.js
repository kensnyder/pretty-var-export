const colors = require('../../colors/colors.js');
const indent = require('../../indent/indent.js');
const SetHandler = require('./SetHandler.js');

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
	const walk = v => v;
	it('should output array with numbers', () => {
		const set = [1, 2, 3];
		const result = SetHandler.format(set, 0, false, indent, walk);
		const formatted = indent.removeAll(colors.uncolorize(result));
		expect(formatted).toBe('newSet([1,2,3])');
	});
	it('should handle empty arrays', () => {
		const set = new Set([]);
		const result = SetHandler.format(set, 0, false, indent, walk);
		const formatted = indent.removeAll(colors.uncolorize(result));
		expect(formatted).toBe('newSet([])');
	});
});
