const colors = require('../../colors/colors.js');
const options = require('../../options/options.js');
const indent = require('../../indent/indent.js');
const TypedArrayHandler = require('./TypedArrayHandler.js');

const constructors = {
	big: [BigInt64Array, BigUint64Array],
	int: [
		Int8Array,
		Int16Array,
		Int32Array,
		Uint8Array,
		Uint16Array,
		Uint32Array,
		Uint8ClampedArray,
	],
	float: [Float32Array, Float64Array],
};

describe('TypedArrayHandler.test() BigInt & BigUint', () => {
	constructors.big.forEach(constructor => {
		it(`should recognize empty ${constructor.name}`, () => {
			const subject = new constructor();
			expect(TypedArrayHandler.test(subject)).toBe(true);
		});
		it(`should recognize non-empty ${constructor.name}`, () => {
			const subject = new constructor([1n, 2n, 3n]);
			expect(TypedArrayHandler.test(subject)).toBe(true);
		});
	});
});

describe('TypedArrayHandler.test() Int & Uint', () => {
	constructors.int.forEach(constructor => {
		it(`should recognize empty ${constructor.name}`, () => {
			const subject = new constructor();
			expect(TypedArrayHandler.test(subject)).toBe(true);
		});
		it(`should recognize non-empty ${constructor.name}`, () => {
			const subject = constructor.from([1, 2, 3]);
			expect(TypedArrayHandler.test(subject)).toBe(true);
		});
	});
});

describe('TypedArrayHandler.test() Float', () => {
	constructors.float.forEach(constructor => {
		it(`should recognize empty ${constructor.name}`, () => {
			const subject = new constructor();
			expect(TypedArrayHandler.test(subject)).toBe(true);
		});
		it(`should recognize non-empty ${constructor.name}`, () => {
			const subject = constructor.from([1.5, 2.5, 3.5]);
			expect(TypedArrayHandler.test(subject)).toBe(true);
		});
	});
});

describe('TypedArrayHandler.format() BigInt & BigUint', () => {
	const walk = v => v + 'n';
	constructors.big.forEach(constructor => {
		it(`should output with numbers for ${constructor.name}`, () => {
			const arr = constructor.from([1n, 2n, 3n]);
			const result = TypedArrayHandler.format(arr, 0, false, indent, walk);
			const formatted = indent.removeAll(colors.unstyle(result));
			expect(formatted).toBe(`${constructor.name}.from([1n,2n,3n])`);
		});
		it(`should handle empty ${constructor.name}`, () => {
			const arr = new constructor();
			const result = TypedArrayHandler.format(arr, 0, false, indent, walk);
			const formatted = indent.removeAll(colors.unstyle(result));
			expect(formatted).toBe(`${constructor.name}.from([])`);
		});
		it('should handle circular references', () => {
			const arr = new constructor();
			const result = TypedArrayHandler.format(arr, 0, true, indent, walk);
			const formatted = indent.removeAll(colors.unstyle(result));
			expect(formatted).toBe(
				`${constructor.name}.from([/*CircularReference*/])`
			);
		});
	});
});

describe('TypedArrayHandler.format() Int & Uint', () => {
	const walk = JSON.stringify;
	constructors.int.forEach(constructor => {
		it(`should output with numbers for ${constructor.name}`, () => {
			const arr = new constructor([1, 2, 3]);
			const result = TypedArrayHandler.format(arr, 0, false, indent, walk);
			const formatted = indent.removeAll(colors.unstyle(result));
			expect(formatted).toBe(`${constructor.name}.from([1,2,3])`);
		});
		it(`should handle empty ${constructor.name}`, () => {
			const arr = new constructor([]);
			const result = TypedArrayHandler.format(arr, 0, false, indent, walk);
			const formatted = indent.removeAll(colors.unstyle(result));
			expect(formatted).toBe(`${constructor.name}.from([])`);
		});
		it('should handle circular references', () => {
			const arr = new constructor([]);
			const result = TypedArrayHandler.format(arr, 0, true, indent, walk);
			const formatted = indent.removeAll(colors.unstyle(result));
			expect(formatted).toBe(
				`${constructor.name}.from([/*CircularReference*/])`
			);
		});
	});
});

describe('TypedArrayHandler.format() Float', () => {
	const walk = JSON.stringify;
	constructors.float.forEach(constructor => {
		it(`should output with numbers for ${constructor.name}`, () => {
			const arr = new constructor([1.5, 2.5, 3.5]);
			const result = TypedArrayHandler.format(arr, 0, false, indent, walk);
			const formatted = indent.removeAll(colors.unstyle(result));
			expect(formatted).toBe(`${constructor.name}.from([1.5,2.5,3.5])`);
		});
		it(`should handle empty ${constructor.name}`, () => {
			const arr = new constructor([]);
			const result = TypedArrayHandler.format(arr, 0, false, indent, walk);
			const formatted = indent.removeAll(colors.unstyle(result));
			expect(formatted).toBe(`${constructor.name}.from([])`);
		});
		it('should handle circular references', () => {
			const arr = new constructor([]);
			const result = TypedArrayHandler.format(arr, 0, true, indent, walk);
			const formatted = indent.removeAll(colors.unstyle(result));
			expect(formatted).toBe(
				`${constructor.name}.from([/*CircularReference*/])`
			);
		});
	});
});

describe('TypedArrayHandler maxListItems', () => {
	beforeEach(() => (options.maxListItems = 2));
	afterEach(() => options.reset());
	it(`should show ellipsis`, () => {
		const arr = Uint8Array.from([1, 2, 3, 4, 5, 6, 7, 8]);
		const result = TypedArrayHandler.format(arr, 0, false);
		const formatted = indent.removeAll(colors.unstyle(result));
		expect(formatted).toBe('Uint8Array.from([1,2/*...+6items*/])');
	});
});
