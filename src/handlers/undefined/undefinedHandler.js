const colors = require('../../colors.js');

const undefinedHandler = {
	test: value => value === undefined,
	format: () => colors.undefined('undefined'),
};

module.exports = undefinedHandler;
