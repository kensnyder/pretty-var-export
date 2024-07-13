import colors from '../../colors/colors';

const BigIntHandler = {
	test: (value: unknown) => typeof value === 'bigint',
	format: (int: BigInt) => {
		return colors.number(int + 'n');
	},
};

export default BigIntHandler;
