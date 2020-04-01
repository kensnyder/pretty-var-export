const Store = require('../Store/Store.js');

const options = new Store({
	showFunctionBody: false,
	maxStringLength: 1024 * 4,
	maxArrayItems: 100,
});

module.exports = options;