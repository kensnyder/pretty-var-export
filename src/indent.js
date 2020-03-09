let characters = '    ';

function indent(level) {
	return new Array(level).join(characters);
}

indent.setIndent = function(numOrCharacters) {
	if (typeof numOrCharacters === 'number') {
		characters = new Array(numOrCharacters + 1).join(' ');
	} else {
		characters = String(numOrCharacters);
	}
};

module.exports = indent;
