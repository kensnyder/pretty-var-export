const colors = require('../../colors/colors.js');
const labels = require('../../labels/labels.js');

const ArrayHandler = {
	test: Array.isArray,
	format: (value, level, seen, indent, walk) => {
		if (seen) {
			return (
				colors.symbol('[') +
				colors.comment(` /* ${labels.circularReference} */ `) +
				colors.symbol(']')
			);
		}
		if (value.length === 0) {
			return colors.symbol('[]');
		}
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
