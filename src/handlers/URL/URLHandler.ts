import colors from '../../colors/colors';
import StringHandler from '../String/StringHandler';

const URLHandler = {
	test: (value: any) => value instanceof URL,
	format: (value: URL) => {
		return (
			colors.constructor('new URL(') +
			StringHandler.format(value.href) +
			colors.constructor(')')
		);
	},
};

export default URLHandler;
