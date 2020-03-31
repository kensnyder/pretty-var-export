const colors = require('../../colors/colors.js');

const RegExpHandler = {
	test: value => value instanceof RegExp,
	format: regex => {
		const [, expression, flags] = String(regex).match(/^\/(.+?)\/([a-z]*)$/);
		return (
			colors.symbol('/') +
			colors.regexp(expression) +
			colors.symbol('/') +
			colors.string(flags)
		);
	},
};

module.exports = RegExpHandler;
