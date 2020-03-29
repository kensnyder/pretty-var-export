const colors = require('../../colors.js');

const zeropad = (num, len) => (new Array(len).join('0') + num).slice(-len);

const dateHandler = {
	test: value => value instanceof Date,
	format: date => {
		let dateStr;
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

module.exports = dateHandler;
