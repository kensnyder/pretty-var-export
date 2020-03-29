const colors = require('../../colors.js');

const ArrayHandler = {
	test: Array.isArray,
	format: (value, level, seen, indent, walk) => {
		if (seen.has(value)) {
			return (
				colors.symbol('[') +
				colors.comment(' /* Circular Reference */ ') +
				colors.symbol(']')
			);
		}
		if (value.length === 0) {
			return colors.symbol('[]');
		}
		seen.add(value);
		return (
			colors.symbol('[') +
			'\n' +
			indent(level + 2) +
			value.map(v => walk(v, level + 1)).join(',\n' + indent(level + 2)) +
			'\n' +
			indent(level + 1) +
			colors.symbol(']')
		);
	},
};

module.exports = ArrayHandler;
