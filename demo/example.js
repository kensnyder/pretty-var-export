const prettify = require('../src/pretty-var-export.js');

const value = [
	{
		one: 1,
		two: '2',
		three: /abcd/gi,
		four: {
			$fourOne: null,
			fourTwo: false,
			fourThree: true,
			fourFour: [Promise.resolve(1), new Promise(() => {})],
			fourFive: undefined,
			fourSix: [1, new Date()],
			'four-seven': 1.552,
			'4eight': 5 / 0,
			'4) nine': NaN,
			'four ten': -5 / 0,
			_four11: 'file\nstays\r\nopen" `ok`?',
			fourTwelve: 'say "hello"!',
		},
		six: Symbol('six'),
		seven: BigInt(Number.MAX_SAFE_INTEGER) * 2n,
		eight: function add(a, b) {
			return a + b;
		},
		nine: (c, d) => c + d,
		ten: parseFloat,
		eleven: Math.max,
	},
];
value[1] = value[0].four;
value[2] = [];
value[3] = {};
value[0].five = value[0].four;
value[4] = value[0].four.fourSix[1];
value[5] = value[0].four.fourSix;

console.log('example:');
console.log(prettify(value));
