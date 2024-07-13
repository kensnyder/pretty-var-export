import colors from '../../colors/colors';

const NumberHandler = {
	test: (value: any) => typeof value === 'number' || value instanceof Number,
	format: colors.number,
};

export default NumberHandler;
