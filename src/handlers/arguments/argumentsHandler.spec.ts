import colors from '../../colors/colors';
import indent from '../../indent/indent';
import argumentsHandler from './argumentsHandler';

describe('argumentsHandler.test()', () => {
	it('should recognize empty arguments', () => {
		const subject = (function () {
			return arguments;
		})();
		expect(argumentsHandler.test(subject)).toBe(true);
	});
	it('should recognize non-empty arguments', () => {
		const subject = (function (a, b) {
			return arguments;
		})(1, 2);
		expect(argumentsHandler.test(subject)).toBe(true);
	});
	it('should not confuse with Arrays', () => {
		const subject = [];
		expect(argumentsHandler.test(subject)).toBe(false);
	});
	it('should not confuse with Objects', () => {
		const subject = {};
		expect(argumentsHandler.test(subject)).toBe(false);
	});
});

describe('argumentsHandler.format()', () => {
	it('should output like an array', () => {
		const args = (function (a, b, c) {
			return arguments;
		})(1, 2, 3);
		const result = argumentsHandler.format(args, 0, false, indent, v => v);
		const formatted = indent.removeAll(colors.unstyle(result));
		expect(formatted).toBe('[1,2,3]');
	});
	it('should handle empty arguments', () => {
		const args = (function () {
			return arguments;
		})();
		const result = argumentsHandler.format(args, 0, false, indent, v => v);
		const formatted = indent.removeAll(colors.unstyle(result));
		expect(formatted).toBe('[]');
	});
});
