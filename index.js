const colors = require('./src/colors/colors.js');
const handlers = require('./src/handlers/handlers.js');
const indent = require('./src/indent/indent.js');
const labels = require('./src/labels/labels.js');
const options = require('./src/options/options.js');

function prettyVarExport(value) {
	const objectsSeen = new Set();
	return walk(value, 0);
	function walk(value, level) {
		for (const handler of handlers) {
			if (handler.test(value)) {
				if (typeof value === 'object') {
					const seen = objectsSeen.has(value);
					const output = handler.format(value, level, seen, indent, walk);
					objectsSeen.add(value);
					return output;
				}
				return handler.format(value, level, false, indent, walk);
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

prettyVarExport.colors = colors;

prettyVarExport.indent = indent;

prettyVarExport.options = labels;

prettyVarExport.options = options;

module.exports = prettyVarExport;
