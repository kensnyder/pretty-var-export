const colors = require('../../colors/colors.js');
const labels = require('../../labels/labels.js');
const options = require('../../options/options.js');

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
		let comment = '';
		const lengthOverage = value.length - options.maxListItems;
		if (lengthOverage > 1) {
			comment = `/* ... +${lengthOverage} items */`;
			value = value.slice(0, options.maxListItems);
		}
		return (
			colors.symbol('[') +
			'\n' +
			indent(level + 2) +
			value.map(v => walk(v, level + 1)).join(',\n' + indent(level + 2)) +
			colors.comment(comment) +
			'\n' +
			indent(level + 1) +
			colors.symbol(']')
		);
	},
};

module.exports = ArrayHandler;
