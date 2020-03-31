const colors = require('../../colors/colors.js');

const URLSearchParamsHandler = {
	test: value => value instanceof URLSearchParams,
	format: value => {
		return (
			colors.constructor('new URLSearchParams(') +
			colors.symbol('"') +
			colors.string(value.toString()) +
			colors.symbol('"') +
			colors.constructor(')')
		);
	},
};

module.exports = URLSearchParamsHandler;
