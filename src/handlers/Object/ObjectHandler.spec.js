const colors = require('../../colors/colors.js');
const indent = require('../../indent/indent.js');
const ObjectHandler = require('./ObjectHandler.js');

describe('ObjectHandler.test()', () => {
	it('should recognize empty object', () => {
		const subject = {};
		expect(ObjectHandler.test(subject)).toBe(true);
	});
	it('should recognize non-empty object', () => {
		const subject = { a: 1 };
		expect(ObjectHandler.test(subject)).toBe(true);
	});
});

describe('ObjectHandler.format()', () => {
	const walk = v => v;
	it('should output array with unquoted keys', () => {
		const arr = { a: 1, $b: 2, _c: 3 };
		const result = ObjectHandler.format(arr, 0, false, indent, walk);
		const formatted = indent.toSpaces(colors.unstyle(result));
		expect(formatted).toBe('{ a: 1, $b: 2, _c: 3 }');
	});
	it('should output array with quoted keys', () => {
		const arr = { a: 1, 'b-2': 2, 'c 3': 3 };
		const result = ObjectHandler.format(arr, 0, false, indent, walk);
		const formatted = indent.toSpaces(colors.unstyle(result));
		expect(formatted).toBe('{ a: 1, "b-2": 2, "c 3": 3 }');
	});
	it('should handle empty objects', () => {
		const arr = [];
		const result = ObjectHandler.format(arr, 0, false, indent, walk);
		const formatted = indent.toSpaces(colors.unstyle(result));
		expect(formatted).toBe('{}');
	});
});
