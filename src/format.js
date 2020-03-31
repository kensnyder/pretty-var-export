const {
	gray,
	blue,
	yellow,
	red,
	cyan,
	green,
	white,
} = require('./colors/colors.js');

const zeropad = (num, len) => (new Array(len).join('0') + num).slice(-len);

const format = {
	colors: {},
	setColors(overrides) {
		Object.assign(format.colors, overrides);
	},
	bigint(int) {
		return format.colors.number(String(int) + 'n');
	},
};

module.exports = format;
