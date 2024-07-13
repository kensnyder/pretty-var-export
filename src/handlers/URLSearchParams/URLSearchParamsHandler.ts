import colors from '../../colors/colors';

const URLSearchParamsHandler = {
	test: (value: unknown) => value instanceof URLSearchParams,
	format: (value: URLSearchParams) => {
		return (
			colors.constructor('new URLSearchParams(') +
			colors.symbol('"') +
			colors.string(value.toString()) +
			colors.symbol('"') +
			colors.constructor(')')
		);
	},
};

export default URLSearchParamsHandler;
