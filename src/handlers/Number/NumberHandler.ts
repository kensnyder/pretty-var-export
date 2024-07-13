import colors from '../../colors/colors';

const NumberHandler = {
	test: (value: unknown) =>
		typeof value === 'number' || value instanceof Number,
	format: colors.number,
};

export default NumberHandler;
