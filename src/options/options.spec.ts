import options from './options';

describe('indent', () => {
	afterEach(() => options.reset());
	it('should allow setting chars', () => {
		options.indent = 'moo';
		expect(options._indentChars).toBe('moo');
	});
	it('should allow setting number of spaces', () => {
		options.indent = 3;
		expect(options._indentChars).toBe('   ');
	});
});
