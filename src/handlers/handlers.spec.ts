import handlers from './handlers';

describe('handler management', () => {
	afterEach(() => {
		handlers.reset();
	});
	it('should allow adding handler', () => {
		const len = handlers.list().length;
		// @ts-expect-error - handler is empty object for testing purposes
		handlers.add('foo', {});
		expect(handlers.list()).toHaveLength(len + 1);
	});
	it('should allow removing handler', () => {
		const len = handlers.list().length;
		handlers.remove('Boolean');
		expect(handlers.list()).toHaveLength(len - 1);
	});
});
