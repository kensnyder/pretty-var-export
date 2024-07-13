import colors from '../../colors/colors';
import labels from '../../labels/labels';

const ObjectHandler = {
	test: (value: unknown) => typeof value === 'object',
	format: (
		value: Record<string, unknown>,
		level: number,
		seen: boolean,
		indent: (level: number) => string,
		walk: (value: unknown, level: number) => string
	) => {
		if (seen) {
			return (
				colors.symbol('{') +
				colors.comment(` /* ${labels.circularReference} */ `) +
				colors.symbol('}')
			);
		}
		const keys = Object.keys(value);
		if (keys.length === 0) {
			return colors.symbol('{}');
		}
		return (
			colors.symbol('{') +
			'\n' +
			keys
				.map(prop => {
					const val = value[prop];
					return (
						indent(level + 2) +
						property(prop) +
						colors.symbol(': ') +
						walk(val, level + 1)
					);
				})
				.join(',\n') +
			'\n' +
			indent(level + 1) +
			colors.symbol('}')
		);
	},
};

function property(str: string) {
	if (str.match(/^[a-z$_]+[\w$_]*$/i)) {
		// no quotes needed
		return colors.property(str);
	}
	// double quotes required
	return (
		colors.symbol('"') +
		colors.property(str.replace(/"/g, '\\"')) +
		colors.symbol('"')
	);
}

export default ObjectHandler;
