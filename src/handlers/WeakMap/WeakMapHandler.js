const colors = require('../../colors.js');

const WeakmapHandler = {
	test: value => value instanceof WeakMap,
	format: value => {
		return (
			colors.constructor('new WeakMap(') +
			colors.comment(' /* Items Unknown */ ') +
			colors.constructor(')')
		);
	},
};

module.exports = WeakmapHandler;
