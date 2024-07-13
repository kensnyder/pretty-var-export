import colors from '../../colors/colors';
import StringHandler from '../String/StringHandler';
import options from '../../options/options';

type HasEntries = FormData | Headers;

const EntriesHandler = {
	test: (value: unknown) =>
		value instanceof FormData || value instanceof Headers,
	format: (
		value: HasEntries,
		level: number = 0,
		_,
		indent: (level: number) => string
	) => {
		const name = value.constructor.name;
		const entries = Array.from(value.entries());
		return (
			colors.constructor(`${name}(`) +
			colors.symbol('[') +
			'\n' +
			entries
				.slice(0, options.maxListItems)
				.map(([key, value]) => {
					return (
						indent(level + 2) +
						colors.symbol('[') +
						StringHandler.format(key) +
						', ' +
						StringHandler.format(String(value)) +
						colors.symbol('],') +
						'\n'
					);
				})
				.join('') +
			maybeEllipsis(entries, level, indent) +
			colors.symbol(']') +
			colors.constructor(')')
		);
	},
};

function maybeEllipsis(
	value: unknown[],
	level: number,
	indent: (level: number) => string
) {
	if (value.length > options.maxListItems) {
		const lengthOverage = value.length - options.maxListItems;
		return (
			'\n' +
			indent(level + 2) +
			colors.comment(`/* ... +${lengthOverage} items */`) +
			'\n'
		);
	}
	return '';
}

export default EntriesHandler;
