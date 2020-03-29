const colors = require('../../colors.js');

const NumberHandler = {
	test: value => typeof value === 'number',
	format: colors.number,
};

module.exports = NumberHandler;
