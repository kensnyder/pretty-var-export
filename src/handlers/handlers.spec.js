const handlers = require('./handlers.js');

describe('handler management', () => {
	afterEach(() => handlers.reset());
	it('should allow adding handler', () => {
		const len = handlers.list().length;
		handlers.add('foo', {});
		expect(handlers.list()).toHaveLength(len + 1);
	});
	it('should allow removing handler', () => {
		const len = handlers.list().length;
		handlers.remove('Boolean');
		expect(handlers.list()).toHaveLength(len - 1);
	});
});
