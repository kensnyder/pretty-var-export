import colors from './colors';

describe('disabling colors', () => {
	beforeEach(() => colors.disable());
	afterEach(() => colors.reset());
	it('should reset boolean', () => {
		expect(colors.boolean('hi')).toBe('hi');
	});
	it('should reset comment', () => {
		expect(colors.comment('hi')).toBe('hi');
	});
	it('should reset constructor', () => {
		expect(colors.constructor('hi')).toBe('hi');
	});
	it('should reset escape', () => {
		expect(colors.escape('hi')).toBe('hi');
	});
	it('should reset null', () => {
		expect(colors.null('hi')).toBe('hi');
	});
	it('should reset number', () => {
		expect(colors.number('hi')).toBe('hi');
	});
	it('should reset property', () => {
		expect(colors.property('hi')).toBe('hi');
	});
	it('should reset regexp', () => {
		expect(colors.regexp('hi')).toBe('hi');
	});
	it('should reset string', () => {
		expect(colors.string('hi')).toBe('hi');
	});
	it('should reset symbol', () => {
		expect(colors.symbol('hi')).toBe('hi');
	});
	it('should reset undefined', () => {
		expect(colors.undefined('hi')).toBe('hi');
	});
});

describe('disabling colors', () => {
	it('should remove colors', () => {
		const bool = colors.boolean('true');
		expect(colors.unstyle(bool)).toBe('true');
	});
});

describe('palette', () => {
	it('should have a palette', () => {
		expect(colors.palette.yellow).toBeTruthy();
	});
});
