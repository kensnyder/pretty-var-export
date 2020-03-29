const colors = require('../../colors.js');
const ArrayHandler = require('../Array/ArrayHandler.js');

const TypedArrayHandler = {
	test: value => {
		return (
			value instanceof BigInt64Array ||
			value instanceof BigUint64Array ||
			value instanceof Int8Array ||
			value instanceof Int16Array ||
			value instanceof Int32Array ||
			value instanceof Uint8Array ||
			value instanceof Uint16Array ||
			value instanceof Uint32Array ||
			value instanceof Uint8ClampedArray ||
			value instanceof Float32Array ||
			value instanceof Float64Array
		);
	},
	format: (value, level, seen, indent, walk) => {
		const constructorName = value.constructor.name;
		if (seen.has(value)) {
			return (
				colors.constructor(`new ${constructorName}(`) +
				colors.comment(' /* Circular Reference */ ') +
				colors.constructor(')')
			);
		}
		value = Array.from(value);
		return (
			colors.constructor(`new ${constructorName}(`) +
			ArrayHandler.format(value, level + 1, seen, indent, walk) +
			colors.constructor(')')
		);
	},
};

module.exports = TypedArrayHandler;
