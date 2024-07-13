import colors from '../../colors/colors';

const MapHandler = {
	test: (value: any) => value instanceof Map,
	format: (
		value: Map<any, any>,
		level: number,
		_,
		indent: (level: number) => string,
		walk: (value: Map<any, any>) => string
	) => {
		return (
			colors.constructor('new Map(') +
			colors.symbol('[\n') +
			Array.from(value)
				.map(pair => {
					return (
						indent(level + 2) +
						colors.symbol('[') +
						walk(pair[0]) +
						colors.symbol(', ') +
						walk(pair[1]) +
						colors.symbol(']')
					);
				})
				.join(',\n') +
			'\n' +
			indent(level + 1) +
			colors.symbol(']') +
			colors.constructor(')')
		);
	},
};

export default MapHandler;
