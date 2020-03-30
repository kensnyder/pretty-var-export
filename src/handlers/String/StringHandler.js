const colors = require('../../colors.js');

const StringHandler = {
	test: value => typeof value === 'string' || value instanceof String,
	format: str => {
		if (str.match(/[\r\n]/)) {
			// multi-line string
			str = str.replace(/`/g, '\\`');
			return colors.symbol('`') + colors.string(str) + colors.symbol('`');
		}
		// single-line string
		str = str.replace(/"/g, '\\"');
		return colors.symbol('"') + colors.string(str) + colors.symbol('"');
	},
};

module.exports = StringHandler;
