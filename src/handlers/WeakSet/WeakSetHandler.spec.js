const colors = require('../../colors/colors.js');
const indent = require('../../indent.js');
const WeakSetHandler = require('./WeakSetHandler.js');

describe('WeakSetHandler.test()', () => {
	it('should recognize empty sets', () => {
		const subject = new WeakSet();
		expect(WeakSetHandler.test(subject)).toBe(true);
	});
	it('should recognize non-empty set', () => {
		const subject = new WeakSet([{}, {}, () => {}, []]);
		expect(WeakSetHandler.test(subject)).toBe(true);
	});
	it('should not confuse with Set', () => {
		const subject = new Set();
		expect(WeakSetHandler.test(subject)).toBe(false);
	});
	it('should not confuse with array', () => {
		const subject = [];
		expect(WeakSetHandler.test(subject)).toBe(false);
	});
	it('should not confuse with Objects', () => {
		const subject = {};
		expect(WeakSetHandler.test(subject)).toBe(false);
	});
});

describe('WeakSetHandler.format()', () => {
	it('should output Items Unknown', () => {
		const set = new WeakSet();
		const result = WeakSetHandler.format(set);
		const formatted = indent.removeAll(colors.uncolorize(result));
		expect(formatted).toBe('newWeakSet(/*ItemsUnknown*/)');
	});
});
