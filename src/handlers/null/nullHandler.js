const colors = require('../../colors.js');

const nullHandler = {
	test: value => value === null,
	format: () => colors.null('null'),
};

module.exports = nullHandler;
