export { default as colors } from './src/colors/colors';
import { default as handlers } from './src/handlers/handlers';
import { default as indent } from './src/indent/indent';
import { default as labels } from './src/labels/labels';
import { default as options } from './src/options/options';

export default function pretty(value: unknown) {
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
export function log(...args: any[]) {
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
}
