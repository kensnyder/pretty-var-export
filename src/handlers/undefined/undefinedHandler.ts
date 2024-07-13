import colors from '../../colors/colors';

const undefinedHandler = {
	test: (value: unknown) => value === undefined,
	format: () => colors.undefined('undefined'),
};

export default undefinedHandler;
