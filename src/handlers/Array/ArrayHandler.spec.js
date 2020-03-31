const colors = require('../../colors/colors.js');
const indent = require('../../indent.js');
const ArrayHandler = require('./ArrayHandler.js');

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
		const subject = (function(a, b) {
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
		const formatted = indent.removeAll(colors.uncolorize(result));
		expect(formatted).toBe('[1,2,3]');
	});
	it('should handle empty arrays', () => {
		const arr = [];
		const result = ArrayHandler.format(arr, 0, false, indent, walk);
		const formatted = indent.removeAll(colors.uncolorize(result));
		expect(formatted).toBe('[]');
	});
});
