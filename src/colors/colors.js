const c = require('ansi-colors');
const Store = require('../Store/Store.js');

const colors = new Store({
	// colors
	boolean: c.yellow,
	comment: c.gray,
	constructor: c.blue,
	null: c.yellow,
	number: c.red,
	property: c.cyan,
	regexp: c.blue,
	string: c.green,
	symbol: c.white,
	undefined: c.yellow,
	// palette for more colors
	palette: c,
	// utility functions
	unstyle: c.unstyle,
	disable: function () {
		const functions =
			'boolean comment constructor null number property regexp string symbol undefined';
		functions.split(' ').forEach(name => {
			this[name] = v => v;
		});
	},
});

module.exports = colors;
