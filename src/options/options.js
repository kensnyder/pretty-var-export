const Store = require('../Store/Store.js');

const options = new Store({
	showFunctionBody: false,
	maxStringLength: 1024 * 4,
	maxListItems: 100,
	preferBackticks: true,
	// allowed: single, double, backtick
	quoteStyle: 'double',
});

module.exports = options;
