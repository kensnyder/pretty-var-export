import Store from './Store.ts';

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
	it('should allow resetting all fields', () => {
		const store = new Store({ a: 1 });
		store.a = 'one';
		store.reset();
		expect(store.a).toBe(1);
	});
	it('should allow resetting one field', () => {
		const store = new Store({ a: 1, b: 2 });
		store.a = 'one';
		store.b = 'two';
		store.reset('a');
		expect(store.a).toBe(1);
		expect(store.b).toBe('two');
	});
});
