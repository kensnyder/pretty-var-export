const colors = require('../../colors/colors.js');
const labels = require('../../labels/labels.js');

const ObjectHandler = {
	test: value => typeof value === 'object',
	format: (value, level, seen, indent, walk) => {
		if (seen) {
			return (
				colors.symbol('{') +
				colors.comment(` /* ${labels.circularReference} */ `) +
				colors.symbol('}')
			);
		}
		const keys = Object.keys(value);
		if (keys.length === 0) {
			return colors.symbol('{}');
		}
		return (
			colors.symbol('{') +
			'\n' +
			keys
				.map(prop => {
					const val = value[prop];
					return (
						indent(level + 2) +
						property(prop) +
						colors.symbol(': ') +
						walk(val, level + 1)
					);
				})
				.join(',\n') +
			'\n' +
			indent(level + 1) +
			colors.symbol('}')
		);
	},
};

function property(str) {
	if (str.match(/^[a-z$_]+[\w$_]*$/i)) {
		// no quotes needed
		return colors.property(str);
	}
	// double quotes required
	return (
		colors.symbol('"') +
		colors.property(str.replace(/"/g, '\\"')) +
		colors.symbol('"')
	);
}

module.exports = ObjectHandler;
