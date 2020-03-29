const format = require('./format.js');

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

const booleanHandler = {
	test: value => typeof value === 'boolean',
	format: format.boolean,
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
