const options = require('../options/options');

function indent(level) {
	return new Array(level + 1).join(options.indent);
}

indent.removeAll = function (str) {
	return str.replace(/\s+/g, '');
};

indent.toSpaces = function (str) {
	return str.replace(/\s+/g, ' ');
};

module.exports = indent;
