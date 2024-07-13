import nullHandler from './null/nullHandler';
import undefinedHandler from './undefined/undefinedHandler';
import DateHandler from './Date/DateHandler';
import ErrorHandler from './Error/ErrorHandler';
import RegExpHandler from './RegExp/RegExpHandler';
import PromiseHandler from './Promise/PromiseHandler';
import BigIntHandler from './BigInt/BigIntHandler';
import FunctionHandler from './Function/FunctionHandler';
import SymbolHandler from './Symbol/SymbolHandler';
import StringHandler from './String/StringHandler';
import NumberHandler from './Number/NumberHandler';
import BooleanHandler from './Boolean/BooleanHandler';
import argumentsHandler from './arguments/argumentsHandler';
import ArrayHandler from './Array/ArrayHandler';
import TypedArrayHandler from './TypedArray/TypedArrayHandler';
import WeakMapHandler from './WeakMap/WeakMapHandler';
import MapHandler from './Map/MapHandler';
import SetHandler from './Set/SetHandler';
import WeakSetHandler from './WeakSet/WeakSetHandler';
import URLHandler from './URL/URLHandler';
import URLSearchParamsHandler from './URLSearchParams/URLSearchParamsHandler';
import ObjectHandler from './Object/ObjectHandler';

export type Formatter = (
	value: any,
	level: number,
	seen: boolean,
	indent: (level: number) => string,
	walk: Formatter
) => string;

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
	add(
		name: string,
		handler: {
			test: (value: any) => boolean;
			format: Formatter;
		}
	) {
		list = [{ name, handler }, ...list];
		return this;
	},
	remove(name: string) {
		list = list.filter(item => item.name !== name);
		return this;
	},
	reset() {
		list = [...defaultList];
		return this;
	},
	list() {
		return list.map(item => item.handler);
	},
};

export default handlers;
