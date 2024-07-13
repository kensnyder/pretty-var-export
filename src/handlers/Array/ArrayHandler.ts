import colors from '../../colors/colors';
import labels from '../../labels/labels';
import options from '../../options/options';

const ArrayHandler = {
	test: Array.isArray,
	format: (
		value: any[],
		level: number,
		seen: boolean,
		indent: (level: number) => string,
		walk: (value: any[], level: number) => string
	) => {
		if (value.length === 0) {
			return colors.symbol('[]');
		}
		if (seen) {
			return (
				colors.symbol('[') +
				colors.comment(` /* ${labels.circularReference} */ `) +
				colors.symbol(']')
			);
		}
		let comment = '';
		const lengthOverage = value.length - options.maxListItems;
		if (lengthOverage > 1) {
			comment = `/* ... +${lengthOverage} items */`;
			value = value.slice(0, options.maxListItems);
		}
		return (
			colors.symbol('[') +
			'\n' +
			indent(level + 2) +
			value.map(v => walk(v, level + 1)).join(',\n' + indent(level + 2)) +
			colors.comment(comment) +
			'\n' +
			indent(level + 1) +
			colors.symbol(']')
		);
	},
};

export default ArrayHandler;
