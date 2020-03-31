const colors = require('../../colors/colors.js');

const WeakSetHandler = {
	test: value => value instanceof WeakSet,
	format: () => {
		return (
			colors.constructor('new WeakSet(') +
			colors.comment(' /* Items Unknown */ ') +
			colors.constructor(')')
		);
	},
};

module.exports = WeakSetHandler;
