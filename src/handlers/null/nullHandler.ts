import colors from '../../colors/colors';

const nullHandler = {
	test: (value: unknown) => value === null,
	format: () => colors.null('null'),
};

export default nullHandler;
