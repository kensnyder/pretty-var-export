const colors = require('../../colors/colors.js');

const SetHandler = {
	test: value => value instanceof Set,
	format: (value, level, seen, indent, walk) => {
		if (seen) {
			return (
				colors.constructor('new Set(') +
				colors.comment(' /* Circular Reference */ ') +
				colors.constructor(')')
			);
		}
		return (
			colors.constructor('new Set(') +
			colors.symbol('[\n') +
			walk(Array.from(value), level + 1, seen, indent, walk) +
			colors.symbol('\n]') +
			colors.constructor(')')
		);
	},
};

module.exports = SetHandler;
