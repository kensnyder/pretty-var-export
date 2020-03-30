const colors = require('../../colors.js');
const options = require('../../options/options.js');

const FunctionHandler = {
	test: value => typeof value === 'function',
	format: func => {
		if (options.get('showFunctionBody')) {
			return colors.constructor(func.toString());
		}
		return (
			colors.constructor('function') +
			colors.symbol('() {') +
			colors.comment(' /* showFunctionBody: false */ ') +
			colors.symbol('}')
		);
	},
};

module.exports = FunctionHandler;
