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
	// unit test
	unstyle: c.unstyle,
	// palette for more colors
	palette: c,
});

module.exports = colors;
