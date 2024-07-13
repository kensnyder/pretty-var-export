import colors from '../../colors/colors';
import labels from '../../labels/labels';

const WeakSetHandler = {
	test: (value: unknown) => value instanceof WeakSet,
	format: _ => {
		return (
			colors.constructor('new WeakSet(') +
			colors.comment(` /* ${labels.itemsUnknown} */ `) +
			colors.constructor(')')
		);
	},
};

export default WeakSetHandler;
