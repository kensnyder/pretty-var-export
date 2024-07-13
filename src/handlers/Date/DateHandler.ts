import colors from '../../colors/colors';

const zeropad = (num: number, len: number) =>
	(new Array(len).join('0') + String(num)).slice(-len);

const dateHandler = {
	test: (value: any) => value instanceof Date,
	format: (date: Date) => {
		let dateStr: string;
		if (isNaN(date.getFullYear())) {
			dateStr = 'Invalid Date';
		} else {
			dateStr =
				date.getFullYear() +
				'-' +
				zeropad(date.getMonth() + 1, 2) +
				'-' +
				zeropad(date.getDate(), 2) +
				'T' +
				zeropad(date.getHours(), 2) +
				':' +
				zeropad(date.getMinutes(), 2) +
				':' +
				zeropad(date.getSeconds(), 2) +
				'.' +
				zeropad(date.getMilliseconds(), 3);
		}
		return (
			colors.constructor('new Date(') +
			colors.symbol('"') +
			colors.string(dateStr) +
			colors.symbol('"') +
			colors.constructor(')')
		);
	},
};

export default dateHandler;
