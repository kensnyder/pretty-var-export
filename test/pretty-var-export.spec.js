const prettify = require('../src/pretty-var-export.js');

function uncolorize(str) {
	return str.replace(/\x1b\[[0-9;]*m/g, '');
}

describe('prettyVarExport', () => {
	it('should handle strings', () => {
		const result = uncolorize(prettify('str'));
		expect(result).toBe('"str"');
	});
	it('should handle numbers', () => {
		const result = uncolorize(prettify(1));
		expect(result).toBe('1');
	});
	it('should handle dates', () => {
		const dateStr = '2020-02-16T17:24:19.671';
		const result = uncolorize(prettify(new Date('2020-02-16T17:24:19.671')));
		expect(result).toBe(`new Date("${dateStr}")`);
	});
	it('should handle null', () => {
		const result = uncolorize(prettify(null));
		expect(result).toBe('null');
	});
	it('should handle true', () => {
		const result = uncolorize(prettify(true));
		expect(result).toBe('true');
	});
	it('should handle false', () => {
		const result = uncolorize(prettify(false));
		expect(result).toBe('false');
	});
	it('should handle empty arrays', () => {
		const result = uncolorize(prettify([]));
		expect(result).toBe('[]');
	});
	it('should handle int arrays', () => {
		const result = uncolorize(prettify([1, 2]));
		expect(result).toBe('[\n    1,\n    2\n]');
	});
	it('should handle objects', () => {
		const result = uncolorize(prettify({ a: 1, b: 2, 'c-3': 3 }));
		expect(result).toBe('{\n    a: 1,\n    b: 2,\n    "c-3": 3\n}');
	});
	it('should handle RegExp', () => {
		const result = uncolorize(prettify(/abc/im));
		expect(result).toBe('/abc/im');
	});
	it('should handle undefined', () => {
		const result = uncolorize(prettify(undefined));
		expect(result).toBe('undefined');
	});
	it('should handle BigInt', () => {
		if (typeof BigInt === 'undefined') {
			expect(true).toBe(true);
			return;
		}
		const result = uncolorize(
			prettify(BigInt(Number.MAX_SAFE_INTEGER) * BigInt(2))
		);
		expect(result).toBe('18014398509481982n');
	});
	it('should handle Symbols', () => {
		const result = uncolorize(prettify(Symbol('hi')));
		expect(result).toBe('Symbol("hi")');
	});
	it('should handle NaN', () => {
		const result = uncolorize(prettify(NaN));
		expect(result).toBe('NaN');
	});
	it('should handle Infinity', () => {
		const result = uncolorize(prettify(Infinity));
		expect(result).toBe('Infinity');
	});
	it('should handle -Infinity', () => {
		const result = uncolorize(prettify(-Infinity));
		expect(result).toBe('-Infinity');
	});
	it('should handle function', () => {
		const func = (c, d) => c + d;
		const result = uncolorize(prettify(func));
		expect(result).toBe(String(func));
	});
});
