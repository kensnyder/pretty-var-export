import colors from '../../colors/colors';

const PromiseHandler = {
	test: (value: unknown) => value instanceof Promise,
	format: _ => {
		return (
			colors.constructor('new Promise') +
			colors.symbol('(()') +
			colors.constructor(' => ') +
			colors.symbol('{})')
		);
	},
};

export default PromiseHandler;
