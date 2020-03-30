const format = require('./format.js');

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
