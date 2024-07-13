import colors from '../../colors/colors';
import labels from '../../labels/labels';
import { Formatter } from '../../types';

const SetHandler = {
	test: (value: unknown) => value instanceof Set,
	format: (
		value: Set<unknown> | unknown[],
		level: number,
		seen: Set<unknown>,
		indent: (level: number) => string,
		walk: Formatter
	) => {
		if (seen) {
			return (
				colors.constructor('new Set(') +
				colors.comment(` /* ${labels.circularReference} */ `) +
				colors.constructor(')')
			);
		}
		return (
			colors.constructor('new Set(') +
			walk(Array.from(value), level, seen, indent, walk) +
			colors.constructor(')')
		);
	},
};

export default SetHandler;
