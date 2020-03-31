const Store = require('../Store/Store.js');

const options = new Store({
	circularReference: 'Circular Reference',
	codeOmitted: 'Code Omitted',
	itemsUnknown: 'Items Unknown',
});

module.exports = options;
