const pretty = require('../index.js');

const value = {
	aNumber: 1,
	aString: '2',
	aRegExp: /ab\r\ncd/gi,
	anObject: {
		aNull: null,
		aBoolean: false,
		aBooleanToo: true,
		twoPromises: [Promise.resolve(1), new Promise(() => {})],
		anUndefined: undefined,
		$anArray: [1, new Date()],
		'a-float': 1.552,
		'0Infinity': 5 / 0,
		'a NaN': NaN,
		'negative Infinity': -5 / 0,
		aString: 'say "hello"!',
		aUnicodeString: 'Ich ♥ Bücher; foo 𝌆 bar 🏁 baz',
		_aMultilineString: 'diner\nstays\r\n"open".\t`ok`?',
	},
	aSymbol: Symbol('six'),
	aBigInt: BigInt(Number.MAX_SAFE_INTEGER) * 2n,
	anError: new Error('foobar'),
	aURL: new URL('https://example.com/abc/🛹/?d=4'),
	aURLSearchParams: new URLSearchParams({ d: 4, e: '🤿' }),
	aSet: new Set(['a', 'b']),
	aMap: new Map([
		['c', 3],
		['d', 4],
	]),
	aWeakSet: new WeakSet(),
	aWeakMap: new WeakMap(),
	anEmptyArray: [],
	anEmptyObject: {},
	aBuffer: Buffer.from([42, 4, 1, 20]),
	aBufferToo: Buffer.from('🪂⛳️'),
};
value.aCircularArray = value.anObject.$anArray;
value.aCircularObject = value.anEmptyObject;
value.aCircularSet = value.aSet;

console.log('example:');
// pretty.options.preferBackticks = false;
pretty.log(value);
