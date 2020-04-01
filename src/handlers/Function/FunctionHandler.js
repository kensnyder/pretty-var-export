const colors = require('../../colors/colors.js');
const options = require('../../options/options.js');

const FunctionHandler = {
	test: value => typeof value === 'function',
	format: func => {
		if (options.showFunctionBody) {
			return colors.constructor(func.toString());
		}
		return (
			colors.constructor('function') +
			colors.symbol('() {') +
			colors.comment(' /* Code Omitted */ ') +
			colors.symbol('}')
		);
	},
};

module.exports = FunctionHandler;
