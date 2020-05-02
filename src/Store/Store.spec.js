const Store = require('./Store.js');

describe('indent', () => {
	it('should init with all props', () => {
		const store = new Store({ a: 1 });
		expect(store.a).toBe(1);
	});
	it('should allow setting props', () => {
		const store = new Store({ a: 1 });
		store.a = 'one';
		expect(store.a).toBe('one');
	});
	it('should allow resetting', () => {
		const store = new Store({ a: 1 });
		store.a = 'one';
		store.reset();
		expect(store.a).toBe(1);
	});
});
