import ArrayHandler from '../Array/ArrayHandler.js';

const argumentsHandler = {
	test: value => Object.prototype.toString.call(value) === '[object Arguments]',
	format: (value, level, seen, indent, walk) => {
		return ArrayHandler.format(Array.from(value), level, seen, indent, walk);
	},
};

export default argumentsHandler;
