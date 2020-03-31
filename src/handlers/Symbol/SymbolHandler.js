const colors = require('../../colors/colors.js');
const StringHandler = require('../String/StringHandler.js');

const SymbolHandler = {
	test: value => typeof value === 'symbol',
	format: symbol => {
		const description =
			symbol.description === undefined
				? ''
				: StringHandler.format(symbol.description);
		return (
			colors.constructor('Symbol(') + description + colors.constructor(')')
		);
	},
};

module.exports = SymbolHandler;
