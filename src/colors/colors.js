const c = require('ansi-colors');
const Store = require('../Store/Store.js');

const colors = new Store({
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
	// for disabling all colors
	disable: function () {
		const functions =
			'boolean comment constructor escape null number property regexp string symbol undefined';
		functions.split(' ').forEach(name => {
			this[name] = v => v;
		});
	},
});

module.exports = colors;
