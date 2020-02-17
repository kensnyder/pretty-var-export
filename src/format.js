const { gray, blue, yellow, red, cyan, green, white } = require('./colors.js');

const zeropad = (num, len) => (new Array(len).join('0') + num).slice(-len);

const format = {
	wrapSymbol(str) {
		return white(str);
	},
	wrapQuote(str) {
		return format.wrapSymbol('"') + str + format.wrapSymbol('"');
	},
	wrapBacktick(str) {
		return format.wrapSymbol('`') + str + format.wrapSymbol('`');
	},
	null() {
		return yellow('null');
	},
	date(date) {
		return (
			gray('new Date("') +
			blue(
				[
					date.getFullYear(),
					'-',
					zeropad(date.getMonth() + 1, 2),
					'-',
					zeropad(date.getDate(), 2),
					'T',
					zeropad(date.getHours(), 2),
					':',
					zeropad(date.getMinutes(), 2),
					':',
					zeropad(date.getSeconds(), 2),
					'.',
					zeropad(date.getMilliseconds(), 3),
				].join('')
			) +
			gray('")')
		);
	},
	regexp(regex) {
		return blue(String(regex));
	},
	string(str) {
		if (str.match(/[\r\n]/)) {
			return format.wrapBacktick(green(str.replace(/`/g, '\\`')));
		} else {
			return format.wrapQuote(green(str.replace(/"/g, '\\"')));
		}
	},
	number(num) {
		return red(num);
	},
	bigint(int) {
		return red(String(int) + 'n');
	},
	wrapProp(str) {
		return str.match(/^[a-z$_]+[\w_]*$/i)
			? cyan(str)
			: format.wrapQuote(cyan(str));
	},
	boolean(bool) {
		return yellow(bool ? 'true' : 'false');
	},
	undefined() {
		return yellow('undefined');
	},
	circularArray() {
		return (
			format.wrapSymbol('[') +
			gray(' /* Circular Reference */ ') +
			format.wrapSymbol(']')
		);
	},
	circularObject() {
		return (
			format.wrapSymbol('{') +
			gray(' /* Circular Reference */ ') +
			format.wrapSymbol('}')
		);
	},
	promise() {
		return (
			format.wrapSymbol('{') + gray(' /* Promise */ ') + format.wrapSymbol('}')
		);
	},
	function(func) {
		let src = String(func);
		src = src.replace(
			/^(function [^(]*\(\) \{ )\[native code\]( \})$/,
			'$1/* native code */$2'
		);
		return blue(src);
	},
	error(err) {
		return gray('new Error(') + format.string(err.message) + gray(')');
	},
	symbol(sym) {
		return gray('Symbol(') + format.string(sym.description) + gray(')');
	},
};

module.exports = format;
