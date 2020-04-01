const nullHandler = require('./null/nullHandler.js');
const undefinedHandler = require('./undefined/undefinedHandler.js');
const DateHandler = require('./Date/DateHandler.js');
const ErrorHandler = require('./Error/ErrorHandler.js');
const RegExpHandler = require('./RegExp/RegExpHandler.js');
const PromiseHandler = require('./Promise/PromiseHandler.js');
const BigIntHandler = require('./BigInt/BigIntHandler.js');
const FunctionHandler = require('./Function/FunctionHandler.js');
const SymbolHandler = require('./Symbol/SymbolHandler.js');
const StringHandler = require('./String/StringHandler.js');
const NumberHandler = require('./Number/NumberHandler.js');
const BooleanHandler = require('./Boolean/BooleanHandler.js');
const argumentsHandler = require('./arguments/argumentsHandler.js');
const ArrayHandler = require('./Array/ArrayHandler.js');
const TypedArrayHandler = require('./TypedArray/TypedArrayHandler.js');
const WeakMapHandler = require('./WeakMap/WeakMapHandler.js');
const MapHandler = require('./Map/MapHandler.js');
const SetHandler = require('./Set/SetHandler.js');
const WeakSetHandler = require('./WeakSet/WeakSetHandler.js');
const URLHandler = require('./URL/URLHandler.js');
const URLSearchParamsHandler = require('./URLSearchParams/URLSearchParamsHandler.js');
const ObjectHandler = require('./Object/ObjectHandler.js');

const defaultList = [
	{ name: 'null', handler: nullHandler },
	{ name: 'undefined', handler: undefinedHandler },
	{ name: 'Date', handler: DateHandler },
	{ name: 'Error', handler: ErrorHandler },
	{ name: 'RegExp', handler: RegExpHandler },
	{ name: 'Promise', handler: PromiseHandler },
	{ name: 'BigInt', handler: BigIntHandler },
	{ name: 'Function', handler: FunctionHandler },
	{ name: 'Symbol', handler: SymbolHandler },
	{ name: 'String', handler: StringHandler },
	{ name: 'Number', handler: NumberHandler },
	{ name: 'Boolean', handler: BooleanHandler },
	{ name: 'arguments', handler: argumentsHandler },
	{ name: 'Array', handler: ArrayHandler },
	{ name: 'TypedArray', handler: TypedArrayHandler },
	{ name: 'WeakMap', handler: WeakMapHandler },
	{ name: 'Map', handler: MapHandler },
	{ name: 'Set', handler: SetHandler },
	{ name: 'WeakSet', handler: WeakSetHandler },
	{ name: 'URL', handler: URLHandler },
	{ name: 'URLSearchParams', handler: URLSearchParamsHandler },
	{ name: 'ObjectParams', handler: ObjectHandler },
];

let list = [...defaultList];

const handlers = {
	add: function (name, handler) {
		list = [{ name, handler }, ...list];
		return this;
	},
	remove: function (name) {
		list = list.filter(item => item.name === name);
		return this;
	},
	reset: function () {
		list = [...defaultList];
		return this;
	},
	list: function () {
		return list.map(item => item.handler);
	},
};

module.exports = handlers;
