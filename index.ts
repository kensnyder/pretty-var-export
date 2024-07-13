import colors from './src/colors/colors';
import handlers from './src/handlers/handlers';
import indent from './src/indent/indent';
import labels from './src/labels/labels';
import options from './src/options/options';

function pretty(value: unknown) {
	const objectsSeen = new Set();
	return walk(value, 0);
	function walk(value: unknown, level: number) {
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
 */
pretty.log = function log(...args: any[]) {
	try {
		const fromLine = new Error().stack?.split('\n')[2].trim() || '';
		console.log(`pretty-var-export ${fromLine}`);
	} catch (e) {}
	if (typeof process === 'undefined' || typeof process.stdout === 'undefined') {
		console.log(pretty(args));
	} else {
		args.forEach(value => {
			process.stdout.write(pretty(value) + '\n');
		});
	}
};

pretty.colors = colors;

pretty.handlers = handlers;

pretty.indent = indent;

pretty.labels = labels;

pretty.options = options;

export default pretty;
