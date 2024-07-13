import jsesc from 'jsesc';
import colors from '../../colors/colors';
import options from '../../options/options';

const escapesToColor = [
	{ regex: /\\r/g, replace: '\\r' },
	{ regex: /\\n/g, replace: '\\n' },
	{ regex: /\\t/g, replace: '\\t' },
];

const quoteChars = {
	single: "'",
	double: '"',
	backtick: '`',
};

const StringHandler = {
	test: value => typeof value === 'string' || value instanceof String,
	format: str => {
		let comment = '';
		let quoteChar;
		const lengthOverage = str.length - options.maxStringLength;
		if (lengthOverage > 18) {
			comment = `/* ... +${lengthOverage} chars */`;
			str = str.slice(0, options.maxStringLength);
		}
		if (options.preferBackticks && str.match(/[\r\n\t]/)) {
			// use backticks and multi-line string
			str = jsesc(str, { quotes: 'backtick', es6: true, wrap: false });
			// show crlf
			str = str.replace(/\\r/g, '\r');
			str = str.replace(/\\n/g, '\n');
			quoteChar = '`';
		} else {
			// single-line string
			str = jsesc(str, { quotes: options.quoteStyle, es6: true, wrap: false });
			// color some escapes
			escapesToColor.forEach(esc => {
				str = str.replace(esc.regex, colors.escape(esc.replace));
			});
			quoteChar = quoteChars[options.quoteStyle];
		}
		// colorize and add quotes
		return (
			colors.symbol(quoteChar) +
			colors.string(str) +
			colors.symbol(quoteChar) +
			colors.comment(comment)
		);
	},
};

export default StringHandler;
