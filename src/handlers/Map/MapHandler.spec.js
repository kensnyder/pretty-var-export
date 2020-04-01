const colors = require('../../colors/colors.js');
const indent = require('../../indent/indent.js');
const MapHandler = require('./MapHandler.js');

describe('MapHandler.test()', () => {
	it('should recognize empty maps', () => {
		const subject = new Map();
		expect(MapHandler.test(subject)).toBe(true);
	});
	it('should recognize non-empty maps', () => {
		const subject = new Map([
			['a', 1],
			['b', 2],
			['c', 3],
		]);
		expect(MapHandler.test(subject)).toBe(true);
	});
	it('should not confuse with Objects', () => {
		const subject = {};
		expect(MapHandler.test(subject)).toBe(false);
	});
});

describe('MapHandler.format()', () => {
	const walk = v => (typeof v === 'string' ? `'${v}'` : v);
	it('should output simple map', () => {
		const map = new Map([
			['a', 1],
			['b', 2],
			['c', 3],
		]);
		const result = MapHandler.format(map, 0, false, indent, walk);
		const formatted = indent.toSpaces(colors.unstyle(result));
		expect(formatted).toBe("new Map([ ['a', 1], ['b', 2], ['c', 3] ])");
	});
	it('should handle empty maps', () => {
		const map = new Map();
		const result = MapHandler.format(map, 0, false, indent, walk);
		const formatted = indent.toSpaces(colors.unstyle(result));
		expect(formatted).toBe('new Map([ ])');
	});
});
