import options from '../options/options.js';

export default function indent(level: number) {
	return new Array(level).join(options.indent);
}

indent.removeAll = function (str: string) {
	return str.replace(/\s+/g, '');
};

indent.toSpaces = function (str: string) {
	return str.replace(/\s+/g, ' ');
};
