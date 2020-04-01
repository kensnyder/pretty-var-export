let characters = '  ';

function indent(level) {
	return new Array(level).join(characters);
}

indent.set = function (numOrCharacters) {
	if (typeof numOrCharacters === 'number') {
		characters = new Array(numOrCharacters + 1).join(' ');
	} else {
		characters = String(numOrCharacters);
	}
};

indent.removeAll = function (str) {
	return str.replace(/\s+/g, '');
};

indent.toSpaces = function (str) {
	return str.replace(/\s+/g, ' ');
};

module.exports = indent;
