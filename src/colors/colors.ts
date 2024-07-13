import * as c from 'ansi-colors';

const defaultColors = {
	// colors
	boolean: c.yellow,
	comment: c.gray,
	constructor: c.blue,
	escape: c.yellowBright,
	null: c.yellow,
	number: c.red,
	property: c.cyan,
	regexp: c.blue,
	string: c.green,
	symbol: c.white,
	undefined: c.yellow,
	// palette for more colors
	palette: c,
	// for unit tests
	unstyle: c.unstyle,
};

const identity = (v: string) => v;

const colors = {
	...defaultColors,
	reset: () => Object.assign(colors, defaultColors),
	disable: () => {
		const functions =
			'boolean comment constructor escape null number property regexp string symbol undefined';
		functions.split(' ').forEach(name => {
			colors[name] = identity;
		});
	},
};

export default colors;
