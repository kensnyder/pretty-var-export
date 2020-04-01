const colors = require('../../colors/colors.js');
const options = require('../../options/options.js');
const labels = require('../../labels/labels.js');

const FunctionHandler = {
	test: value => typeof value === 'function',
	format: func => {
		if (options.showFunctionBody) {
			return colors.constructor(func.toString());
		}
		return (
			colors.constructor('function') +
			colors.symbol('() {') +
			colors.comment(` /* ${labels.codeOmitted} */ `) +
			colors.symbol('}')
		);
	},
};

module.exports = FunctionHandler;
