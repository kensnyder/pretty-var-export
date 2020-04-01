const colors = require('../../colors/colors.js');

const NumberHandler = {
	test: value => typeof value === 'number' || value instanceof Number,
	format: num => colors.number(num),
};

module.exports = NumberHandler;
