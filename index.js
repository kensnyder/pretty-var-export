const colors = require('./src/colors/colors.js');
const handlers = require('./src/handlers/handlers.js');
const indent = require('./src/indent/indent.js');
const labels = require('./src/labels/labels.js');
const options = require('./src/options/options.js');

function prettyVarExport(value) {
	const objectsSeen = new Set();
	return walk(value, 0);
	function walk(value, level) {
		for (const handler of handlers.list()) {
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

/**
 * Log given values to stdout with a stacktrace label
 * @param {any[]} args
 */
prettyVarExport.log = function log(...args) {
	try {
		const fromLine = new Error().stack.split('\n')[2].trim();
		console.log(`pretty-var-export ${fromLine}`);
	} catch (e) {}
	args.forEach(value => {
		process.stdout.write(prettyVarExport(value) + '\n');
	});
};

prettyVarExport.colors = colors;

prettyVarExport.handlers = handlers;

prettyVarExport.indent = indent;

prettyVarExport.labels = labels;

prettyVarExport.options = options;

module.exports = prettyVarExport;
