import colors from '../../colors/colors';
import labels from '../../labels/labels';

const WeakmapHandler = {
	test: (value: any) => value instanceof WeakMap,
	format: _ => {
		return (
			colors.constructor('new WeakMap(') +
			colors.comment(` /* ${labels.itemsUnknown} */ `) +
			colors.constructor(')')
		);
	},
};

export default WeakmapHandler;
