const format = require('./format.js');
const indent = require('./indent.js');
const handlers = require('./handlers/handlers.js');
const options = require('./options/options.js');

function prettyVarExport(value) {
	const seen = new WeakSet();
	return walk(value, 0);
	function walk(value, level) {
		for (const handler of handlers) {
			if (handler.test(value)) {
				return handler.format(value, level, seen, indent, walk);
			}
		}
	}
}

prettyVarExport.log = function log(...args) {
	try {
		const fromLine = new Error().stack.split('\n')[2].trim();
		console.log(`pretty-var-export ${fromLine}`);
	} catch (e) {}
	args.forEach(value => {
		console.log(prettyVarExport(value));
	});
};

prettyVarExport.addHandler = function addHandler(spec) {
	handlers.unshift(spec);
	return prettyVarExport;
};

prettyVarExport.setColors = function setColors(overrides) {
	format.setColors(overrides);
	return prettyVarExport;
};

prettyVarExport.setIndent = function setIndent(numOrCharacters) {
	indent.setIndent(numOrCharacters);
	return prettyVarExport;
};

prettyVarExport.options = options;

module.exports = prettyVarExport;
