import colors from '../../colors/colors';
import options from '../../options/options';
import labels from '../../labels/labels';

const FunctionHandler = {
	test: (value: any) => typeof value === 'function',
	format: (func: Function) => {
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

export default FunctionHandler;
