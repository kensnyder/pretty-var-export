const colors = require('../../colors/colors.js');

const BooleanHandler = {
	test: value => typeof value === 'boolean' || value instanceof Boolean,
	// double equals is required to handle both primitive and object Boolean
	format: value => colors.boolean(value == true ? 'true' : 'false'),
};

module.exports = BooleanHandler;
