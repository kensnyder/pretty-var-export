import colors from '../../colors/colors';

const undefinedHandler = {
	test: (value: any) => value === undefined,
	format: () => colors.undefined('undefined'),
};

export default undefinedHandler;
