const codes = {
	red: 31,
	green: 32,
	yellow: 33,
	blue: 34,
	magenta: 35,
	cyan: 36,
	white: 37,
	gray: 90,
};

const types = {
	symbol: codes.white,
	null: codes.yellow,
	constructor: codes.gray,
	string: codes.green,
	regexp: codes.blue,
	number: codes.red,
	property: codes.cyan,
	boolean: codes.yellow,
	undefined: codes.yellow,
	comment: codes.gray,
};

for (const name in types) {
	if (!types.hasOwnProperty(name)) {
		continue;
	}
	const open = types[name];
	module.exports[name] = function(value) {
		return `\u001B[${open}m${value}\u001B[39m`;
	};
}

module.exports.uncolorize = function(str) {
	return str.replace(/\x1b\[[0-9;]*m/g, '');
};
