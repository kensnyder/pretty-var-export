const format = require('./format.js');
const indent = require('./indent.js');

function prettyVarExport(value) {
	const seen = [];
	return walk(value, 0);

	function walk(value, level) {
		if (Array.isArray(value)) {
			if (seen.includes(value)) {
				return indent(level) + format.circularArray();
			}
			if (value.length === 0) {
				return format.wrapSymbol('[]');
			}
			seen.push(value);
			return [
				format.wrapSymbol('['),
				'\n',
				indent(level + 2),
				value.map(v => walk(v, level + 1)).join(',\n' + indent(level + 2)),
				'\n',
				indent(level + 1),
				format.wrapSymbol(']'),
			].join('');
		}
		if (value === null) {
			return format.null();
		}
		if (value === undefined) {
			return format.undefined();
		}
		if (value instanceof Date) {
			return format.date(value);
		}
		if (value instanceof RegExp) {
			return format.regexp(value);
		}
		if (value instanceof Promise) {
			return format.promise();
		}
		if (typeof value === 'function') {
			return format.function(value);
		}
		if (typeof value === 'bigint') {
			return format.bigint(value);
		}
		if (typeof value === 'symbol') {
			return format.symbol(value);
		}
		if (typeof value === 'object') {
			if (seen.includes(value)) {
				return format.circularObject();
			}
			const keys = Object.keys(value);
			if (keys.length === 0) {
				return format.wrapSymbol('{}');
			}
			seen.push(value);
			const keyOutput = keys
				.map(prop => {
					const val = value[prop];
					return [
						indent(level + 2),
						format.prop(prop),
						format.wrapSymbol(':'),
						' ',
						walk(val, level + 1),
						format.wrapSymbol(','),
						'\n',
					].join('');
				})
				.join('');
			return [
				format.wrapSymbol('{'),
				'\n',
				keyOutput,
				indent(level + 1),
				format.wrapSymbol('}'),
			].join('');
		}
		if (typeof value === 'string') {
			return format.string(value);
		}
		if (typeof value === 'number') {
			return format.number(value);
		}
		if (typeof value === 'boolean') {
			return format.boolean(value);
		}
	}
}

module.exports = prettyVarExport;
