const colors = require('../../colors/colors.js');
const labels = require('../../labels/labels.js');

const WeakmapHandler = {
	test: value => value instanceof WeakMap,
	format: value => {
		return (
			colors.constructor('new WeakMap(') +
			colors.comment(` /* ${labels.itemsUnknown} */ `) +
			colors.constructor(')')
		);
	},
};

module.exports = WeakmapHandler;
