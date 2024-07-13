import colors from '../../colors/colors';

const BooleanHandler = {
	test: (value: unknown) =>
		typeof value === 'boolean' || value instanceof Boolean,
	// double equals is required to handle both primitive and object Boolean
	format: (value: boolean | Boolean) =>
		colors.boolean(value == true ? 'true' : 'false'),
};

export default BooleanHandler;
