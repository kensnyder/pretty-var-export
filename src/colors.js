const colors = {
	red: [31, 39],
	green: [32, 39],
	yellow: [33, 39],
	blue: [34, 39],
	magenta: [35, 39],
	cyan: [36, 39],
	white: [37, 39],
	gray: [90, 39],
};

for (const name in colors) {
	if (!colors.hasOwnProperty(name)) {
		continue;
	}
	const [open, close] = colors[name];
	module.exports[name] = function(value) {
		return `\u001B[${open}m${value}\u001B[${close}m`;
	};
}
