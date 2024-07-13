import colors from '../../colors/colors';
import labels from '../../labels/labels';

export type Walker = (
	value: Set<any> | any[],
	level: number,
	seen: boolean,
	indent: (level: number) => string,
	walk: Walker
) => string;

const SetHandler = {
	test: (value: any) => value instanceof Set,
	format: (
		value: Set<any> | any[],
		level: number,
		seen: boolean,
		indent: (level: number) => string,
		walk: Walker
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
