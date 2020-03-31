const colors = require('../../colors/colors.js');

const URLHandler = {
	test: value => value instanceof URL,
	format: value => {
		return (
			colors.constructor("new URL('") +
			colors.string(value.href) +
			colors.constructor("')")
		);
	},
};

module.exports = URLHandler;
