const colors = require('../../colors/colors.js');
const StringHandler = require('../String/StringHandler.js');

const URLHandler = {
	test: value => value instanceof URL,
	format: value => {
		return (
			colors.constructor('new URL(') +
			StringHandler.format(value.href) +
			colors.constructor(')')
		);
	},
};

module.exports = URLHandler;
