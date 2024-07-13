import colors from '../../colors/colors';

const RegExpHandler = {
	test: (value: any) => value instanceof RegExp,
	format: (regex: RegExp) => {
		const [, expression, flags] = String(regex).match(/^\/(.+?)\/([a-z]*)$/)!;
		return (
			colors.symbol('/') +
			colors.regexp(expression) +
			colors.symbol('/') +
			colors.string(flags)
		);
	},
};

export default RegExpHandler;
