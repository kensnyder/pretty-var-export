const colors = require('../../colors/colors.js');

const PromiseHandler = {
	test: value => value instanceof Promise,
	format: () => {
		return (
			colors.constructor('new Promise') +
			colors.symbol('(()') +
			colors.constructor(' => ') +
			colors.symbol('{})')
		);
	},
};

module.exports = PromiseHandler;
