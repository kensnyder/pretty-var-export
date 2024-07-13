import colors from '../../colors/colors';
import labels from '../../labels/labels';

const WeakmapHandler = {
	test: (value: unknown) => value instanceof WeakMap,
	format: _ => {
		return (
			colors.constructor('new WeakMap(') +
			colors.comment(` /* ${labels.itemsUnknown} */ `) +
			colors.constructor(')')
		);
	},
};

export default WeakmapHandler;
