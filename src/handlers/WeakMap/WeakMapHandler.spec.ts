import colors from '../../colors/colors';
import WeakMapHandler from './WeakMapHandler';

describe('WeakMapHandler.test()', () => {
	it('should recognize WeakMaps', () => {
		const subject = new WeakMap();
		expect(WeakMapHandler.test(subject)).toBe(true);
	});
	it('should not confuse with Maps', () => {
		const subject = new Map();
		expect(WeakMapHandler.test(subject)).toBe(false);
	});
	it('should not confuse with Objects', () => {
		const subject = {};
		expect(WeakMapHandler.test(subject)).toBe(false);
	});
});

describe('WeakMapHandler.format()', () => {
	it('should output comment', () => {
		const map = new WeakMap();
		map.set({}, 'a');
		const result = WeakMapHandler.format(map);
		const formatted = colors.unstyle(result);
		expect(formatted).toBe('new WeakMap( /* Items Unknown */ )');
	});
});
