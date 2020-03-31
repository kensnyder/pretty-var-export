const colors = require('../../colors/colors.js');

const NumberHandler = {
	test: value => typeof value === 'number' || value instanceof Number,
	format: colors.number,
};

module.exports = NumberHandler;
