const colors = require('../../colors/colors.js');
const options = require('../../options/options.js');
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
		const construct = `${constructorName}.from(`;
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
		let comment = '';
		const lengthOverage = value.length - options.maxListItems;
		if (lengthOverage > 5) {
			// 21+ chars for comment is average of 5 items
			comment = ` /* ... +${lengthOverage} items */`;
			value = value.slice(0, options.maxListItems);
		}
		return (
			colors.constructor(construct) +
			colors.symbol('[ ') +
			value.map(mapper).join(colors.symbol(', ')) +
			colors.comment(comment) +
			colors.symbol(' ]') +
			colors.constructor(')')
		);
	},
};

module.exports = TypedArrayHandler;
