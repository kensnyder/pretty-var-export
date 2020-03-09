const format = require('./format.js');

const nullHandler = {
	test: value => value === null,
	format: format.null,
};

const undefinedHandler = {
	test: value => value === undefined,
	format: format.undefined,
};

const dateHandler = {
	test: value => value instanceof Date,
	format: format.date,
};

const errorHandler = {
	test: value => value instanceof Error,
	format: format.error,
};

const regexpHandler = {
	test: value => value instanceof RegExp,
	format: format.regexp,
};

const promiseHandler = {
	test: value => value instanceof Promise,
	format: format.promise,
};

const functionHandler = {
	test: value => typeof value === 'function',
	format: format.function,
};

const bigintHandler = {
	test: value => typeof value === 'bigint',
	format: format.bigint,
};

const symbolHandler = {
	test: value => typeof value === 'symbol',
	format: format.symbol,
};

const stringHandler = {
	test: value => typeof value === 'string',
	format: format.string,
};

const numberHandler = {
	test: value => typeof value === 'number',
	format: format.number,
};

const booleanHandler = {
	test: value => typeof value === 'boolean',
	format: format.boolean,
};

const arrayHandler = {
	test: Array.isArray,
	format: (value, level, seen, indent, walk) => {
		if (seen.has(value)) {
			return format.circularArray();
		}
		if (value.length === 0) {
			return format.colors.symbol('[]');
		}
		seen.add(value);
		return (
			format.colors.symbol('[') +
			'\n' +
			indent(level + 2) +
			value.map(v => walk(v, level + 1)).join(',\n' + indent(level + 2)) +
			'\n' +
			indent(level + 1) +
			format.colors.symbol(']')
		);
	},
};

const typedArrayHandler = {
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
				format.colors.constructor(`new ${constructorName}(`) +
				format.comment(' /* circular object */ ') +
				format.colors.constructor(')')
			);
		}
		seen.add(value);
		return (
			format.colors.constructor(`new ${constructorName}(`) +
			arrayHandler.format(value, level + 1, seen, indent, walk) +
			format.colors.constructor(')')
		);
	},
};

const weakmapHandler = {
	test: value => value instanceof WeakMap,
	format: value => {
		return (
			format.colors.constructor('new WeakMap(') +
			format.comment(' /* items unknown */ ') +
			format.colors.constructor(')')
		);
	},
};

const mapHandler = {
	test: value => value instanceof Map,
	format: (value, level, seen, indent, walk) => {
		return (
			format.colors.constructor('new Map(') +
			format.colors.symbol('[\n') +
			Array.from(value)
				.map(pair => {
					return (
						indent(level + 2) +
						format.colors.symbol('[') +
						walk(pair[0]) +
						format.colors.symbol(', ') +
						walk(pair[1]) +
						format.colors.symbol(']')
					);
				})
				.join(',\n') +
			'\n' +
			indent(level + 1) +
			format.colors.symbol(']') +
			format.colors.constructor(')')
		);
	},
};

const weaksetHandler = {
	test: value => value instanceof WeakSet,
	format: value => {
		return (
			format.colors.constructor('new WeakSet(') +
			format.comment(' /* items unknown */ ') +
			format.colors.constructor(')')
		);
	},
};

const setHandler = {
	test: value => value instanceof Set,
	format: (value, level, seen, indent, walk) => {
		return (
			format.colors.constructor('new Set(') +
			format.colors.symbol('[\n') +
			Array.from(value)
				.map(item => indent(level + 2) + walk(item))
				.join(',\n') +
			'\n' +
			indent(level + 1) +
			format.colors.symbol(']') +
			format.colors.constructor(')')
		);
	},
};

const urlHandler = {
	test: value => value instanceof URL,
	format: value => {
		return (
			format.colors.constructor('new URL(') +
			format.string(value.href) +
			format.colors.constructor(')')
		);
	},
};

const urlSearchParamsHandler = {
	test: value => value instanceof URLSearchParams,
	format: value => {
		return (
			format.colors.constructor('new URLSearchParams(') +
			format.string(value.toString()) +
			format.colors.constructor(')')
		);
	},
};

const objectHandler = {
	test: value => typeof value === 'object',
	format: (value, level, seen, indent, walk) => {
		if (seen.has(value)) {
			return format.circularObject();
		}
		const keys = Object.keys(value);
		if (keys.length === 0) {
			return format.colors.symbol('{}');
		}
		seen.add(value);
		const keyOutput = keys
			.map(prop => {
				const val = value[prop];
				return (
					indent(level + 2) +
					format.property(prop) +
					format.colors.symbol(':') +
					' ' +
					walk(val, level + 1)
				);
			})
			.join(',\n');
		return (
			format.colors.symbol('{') +
			'\n' +
			keyOutput +
			'\n' +
			indent(level + 1) +
			format.colors.symbol('}')
		);
	},
};

const handlers = [
	nullHandler,
	undefinedHandler,
	dateHandler,
	errorHandler,
	regexpHandler,
	promiseHandler,
	bigintHandler,
	functionHandler,
	symbolHandler,
	stringHandler,
	numberHandler,
	booleanHandler,
	arrayHandler,
	typedArrayHandler,
	weakmapHandler,
	mapHandler,
	weaksetHandler,
	setHandler,
	urlHandler,
	urlSearchParamsHandler,
	objectHandler,
];

module.exports = handlers;
