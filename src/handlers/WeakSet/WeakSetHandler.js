const colors = require('../../colors/colors.js');
const labels = require('../../labels/labels.js');

const WeakSetHandler = {
	test: value => value instanceof WeakSet,
	format: () => {
		return (
			colors.constructor('new WeakSet(') +
			colors.comment(` /* ${labels.itemsUnknown} */ `) +
			colors.constructor(')')
		);
	},
};

module.exports = WeakSetHandler;
