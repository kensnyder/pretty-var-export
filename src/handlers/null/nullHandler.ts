import colors from '../../colors/colors';

const nullHandler = {
	test: (value: any) => value === null,
	format: () => colors.null('null'),
};

export default nullHandler;
