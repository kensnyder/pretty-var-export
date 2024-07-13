import colors from '../../colors/colors';
import StringHandler from '../String/StringHandler';

const SymbolHandler = {
	test: (value: any) => typeof value === 'symbol',
	format: (symbol: symbol) => {
		const description =
			symbol.description === undefined
				? ''
				: StringHandler.format(symbol.description);
		return (
			colors.constructor('Symbol(') + description + colors.constructor(')')
		);
	},
};

export default SymbolHandler;
