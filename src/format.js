const { gray, blue, yellow, red, cyan, green, white } = require('./colors.js');

const zeropad = (num, len) => (new Array(len).join('0') + num).slice(-len);

const format = {
	colors: {},
	setColors(overrides) {
		Object.assign(format.colors, overrides);
	},
	comment(value) {
		return format.colors.comment(value);
	},
	null() {
		return format.colors.null('null');
	},
	undefined() {
		return format.colors.undefined('undefined');
	},
	nan() {
		return format.colors.nan('NaN');
	},
	boolean(bool) {
		return format.colors.boolean(bool ? 'true' : 'false');
	},
	date(date) {
		return (
			format.colors.constructor('new Date(') +
			format.colors.symbol('"') +
			format.colors.string(
				date.getFullYear() +
					'-' +
					zeropad(date.getMonth() + 1, 2) +
					'-' +
					zeropad(date.getDate(), 2) +
					'T' +
					zeropad(date.getHours(), 2) +
					':' +
					zeropad(date.getMinutes(), 2) +
					':' +
					zeropad(date.getSeconds(), 2) +
					'.' +
					zeropad(date.getMilliseconds(), 3)
			) +
			format.colors.symbol('"') +
			format.colors.constructor(')')
		);
	},
	regexp(regex) {
		if (!(regex instanceof RegExp)) {
			return 'not regexp!';
		}
		const match = String(regex).match(/^\/(.+?)\/([a-z]*)$/);
		return (
			format.colors.symbol('/') +
			format.colors.regexp(match[1]) +
			format.colors.symbol('/') +
			format.colors.string(match[2])
		);
	},
	string(str) {
		if (str.match(/[\r\n]/)) {
			// multi-line string
			return (
				format.colors.symbol('`') +
				format.colors.string(str.replace(/`/g, '\\`')) +
				format.colors.symbol('`')
			);
		}
		// single-line string
		return (
			format.colors.symbol('"') +
			format.colors.string(str.replace(/"/g, '\\"')) +
			format.colors.symbol('"')
		);
	},
	number(num) {
		return format.colors.number(num);
	},
	bigint(int) {
		return format.colors.number(String(int) + 'n');
	},
	property(str) {
		if (str.match(/^[a-z$_]+[\w_]*$/i)) {
			// no quotes needed
			return format.colors.property(str);
		}
		// double quotes required
		return (
			format.colors.symbol('"') +
			format.colors.property(str.replace(/"/g, '\\"')) +
			format.colors.symbol('"')
		);
	},
	circularArray() {
		return (
			format.colors.symbol('[') +
			format.colors.comment(' /* Circular Reference */ ') +
			format.colors.symbol(']')
		);
	},
	circularObject() {
		return (
			format.colors.symbol('{') +
			format.colors.comment(' /* Circular Reference */ ') +
			format.colors.symbol('}')
		);
	},
	promise() {
		return (
			format.colors.symbol('{') +
			format.colors.comment(' /* Promise */ ') +
			format.colors.symbol('}')
		);
	},
	function() {
		return format.colors.comment('function() { /* code omitted */ }');
	},
	error(err) {
		return (
			format.colors.constructor('new Error(') +
			format.colors.symbol('"') +
			format.colors.string(err.message) +
			format.colors.symbol('"') +
			format.colors.constructor(')')
		);
	},
	symbol(sym) {
		return (
			format.colors.constructor('new Symbol(') +
			format.colors.symbol('"') +
			format.colors.string(sym.description) +
			format.colors.symbol('"') +
			format.colors.constructor(')')
		);
	},
};

module.exports = format;
