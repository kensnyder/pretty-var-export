import colors from '../../colors/colors';
import StringHandler from '../String/StringHandler';

const ErrorHandler = {
	test: (value: unknown) => value instanceof Error,
	format: (error: Error) => {
		return (
			colors.constructor('new Error(') +
			StringHandler.format(error.message) +
			colors.constructor(')')
		);
	},
};

export default ErrorHandler;
