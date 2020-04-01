const c = require('ansi-colors');
const Store = require('../Store/Store.js');

const colors = new Store({
	// colors
	symbol: c.white,
	null: c.yellow,
	constructor: c.blue,
	string: c.green,
	regexp: c.blue,
	number: c.red,
	property: c.cyan,
	boolean: c.yellow,
	undefined: c.yellow,
	comment: c.gray,
	// unit test
	unstyle: c.unstyle,
	// palette for more colors
	palette: c,
});

module.exports = colors;
