const colors = require('../../colors/colors.js');
const StringHandler = require('../String/StringHandler.js');

const ErrorHandler = {
	test: value => value instanceof Error,
	format: error => {
		return (
			colors.constructor('new Error(') +
			StringHandler.format(error.message) +
			colors.constructor(')')
		);
	},
};

module.exports = ErrorHandler;
