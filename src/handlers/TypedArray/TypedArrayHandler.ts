import colors from '../../colors/colors';
import options from '../../options/options';
import labels from '../../labels/labels';

type TypedArrayShape =
	| Buffer
	| BigInt64Array
	| BigUint64Array
	| Int8Array
	| Int16Array
	| Int32Array
	| Uint8Array
	| Uint16Array
	| Uint32Array
	| Uint8ClampedArray
	| Float32Array
	| Float64Array;

const TypedArrayHandler = {
	test: (value: any) => {
		return (
			(typeof Buffer !== 'undefined' && value instanceof Buffer) ||
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
	format: (value: TypedArrayShape, _, seen: boolean) => {
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
			mapper = v => colors.number(String(v) + 'n');
		} else {
			mapper = v => colors.number(String(v));
		}
		// @ts-expect-error  BigInt64Array and BigUint64Array are not
		value = Array.from(value);
		let comment = '';
		const lengthOverage = value.length - options.maxListItems;
		if (lengthOverage > 5) {
			// 21+ chars for comment is average of 5 items
			comment = ` /* ... +${lengthOverage} items */`;
			if (typeof Buffer !== 'undefined' && value instanceof Buffer) {
				value = Uint8Array.prototype.slice.call(value, 0, options.maxListItems);
			} else {
				value = value.slice(0, options.maxListItems);
			}
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

export default TypedArrayHandler;
