const colors = require('../../colors.js');

const BigIntHandler = {
	test: value => typeof value === 'bigint',
	format: int => {
		return colors.number(int + 'n');
	},
};

module.exports = BigIntHandler;
