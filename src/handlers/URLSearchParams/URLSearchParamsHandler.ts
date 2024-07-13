import colors from '../../colors/colors';

const URLSearchParamsHandler = {
	test: (value: any) => value instanceof URLSearchParams,
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
