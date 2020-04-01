const colors = require('../../colors/colors.js');
const labels = require('../../labels/labels.js');

const TypedArrayHandler = {
	test: value => {
		return (
			value instanceof Buffer ||
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
	format: (value, level, seen) => {
		const constructorName = value.constructor.name;
		const isBuffer = value instanceof Buffer;
		const construct = isBuffer ? 'Buffer.from(' : `new ${constructorName}(`;
		if (seen) {
			return (
				colors.constructor(construct) +
				colors.symbol('[') +
				colors.comment(` /* ${labels.circularReference} */ `) +
				colors.symbol(']') +
				colors.constructor(')')
			);
		}
		let mapper;
		if (value instanceof BigInt64Array || value instanceof BigUint64Array) {
			mapper = v => colors.number(v + 'n');
		} else {
			mapper = colors.number;
		}
		value = Array.from(value);
		return (
			colors.constructor(construct) +
			colors.symbol('[ ') +
			value.map(mapper).join(colors.symbol(', ')) +
			colors.symbol(' ]') +
			colors.constructor(')')
		);
	},
};

module.exports = TypedArrayHandler;
