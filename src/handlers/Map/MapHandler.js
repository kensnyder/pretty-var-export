const colors = require('../../colors/colors.js');

const MapHandler = {
	test: value => value instanceof Map,
	format: (value, level, seen, indent, walk) => {
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

module.exports = MapHandler;
