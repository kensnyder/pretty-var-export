const Store = require('../Store/Store.js');

const options = new Store({
	// if true, show source code of functions
	showFunctionBody: false,
	// longest string length before ellipsis
	maxStringLength: 1024 * 4,
	// max array items before ellipsis
	maxListItems: 100,
	// if true, use backticks for multi-line string
	preferBackticks: true,
	// allowed: single, double, backtick
	quoteStyle: 'double',
	// the string to use for indentation
	_indentChars: '  ',
});

// special prop "indent" with a setter that allows
// setting indent to the given string or
// the given number of spaces
Object.defineProperty(options, 'indent', {
	enumerable: false,
	configurable: false,
	get: function () {
		return this._indentChars;
	},
	set: function (numOrCharacters) {
		if (typeof numOrCharacters === 'number') {
			this._indentChars = new Array(numOrCharacters + 1).join(' ');
		} else {
			this._indentChars = String(numOrCharacters);
		}
	},
});

module.exports = options;
