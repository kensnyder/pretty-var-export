const colors = require('../../colors/colors.js');

const undefinedHandler = {
	test: value => value === undefined,
	format: () => colors.undefined('undefined'),
};

module.exports = undefinedHandler;
