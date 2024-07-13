import EntriesHandler from './EntriesHandler';
import indent from '../../indent/indent';
import colors from '../../colors/colors';

const constructors = [Headers] as const;

describe('Objects with Entries', () => {
	constructors.forEach(constructor => {
		it(`should recognize empty ${constructor.name}`, () => {
			const subject = new constructor();
			expect(EntriesHandler.test(subject)).toBe(true);
		});
		it(`should recognize non-empty ${constructor.name}`, () => {
			const subject = new constructor([
				['a', '1'],
				['b', '2'],
			]);
			expect(EntriesHandler.test(subject)).toBe(true);
		});
		it(`should format ${constructor.name}`, () => {
			const subject = new constructor([
				['a', '1'],
				['b', '2'],
			]);
			const result = EntriesHandler.format(subject, 0, false, indent);
			const formatted = indent.removeAll(colors.unstyle(result));
			expect(formatted).toBe(`${constructor.name}([["a","1"],["b","2"],])`);
		});
		it(`should use ellipsis`, () => {
			const subject = new constructor([
				['a', '1'],
				['b', '2'],
			]);
			const result = EntriesHandler.format(subject, 0, false, indent);
			const formatted = indent.removeAll(colors.unstyle(result));
			expect(formatted).toBe(`${constructor.name}([["a","1"],["b","2"],])`);
		});
	});
});
