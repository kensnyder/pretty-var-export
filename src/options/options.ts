const defaultOptions = {
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
};

const options = {
	...defaultOptions,
	reset: () => Object.assign(options, defaultOptions),
	get indent() {
		return options._indentChars;
	},
	set indent(numOrCharacters: number | string) {
		if (typeof numOrCharacters === 'number') {
			this._indentChars = new Array(numOrCharacters + 1).join(' ');
		} else {
			this._indentChars = String(numOrCharacters);
		}
	},
};

export default options;
