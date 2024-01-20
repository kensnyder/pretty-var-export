declare module 'src/Store/Store' {
	export = Store; function Store(defaults: any): void; class Store {
	    constructor(defaults: any);
	    __defaults: any;
	}
	//# sourceMappingURL=Store.d.ts.map
}
declare module 'src/colors/colors' {
	export = colors; const colors: Store;
	import Store = require('src/Store/Store.js');
	//# sourceMappingURL=colors.d.ts.map
}
declare module 'src/handlers/null/nullHandler' {
	export function test(value: any): boolean;
	export function format(): any;
	//# sourceMappingURL=nullHandler.d.ts.map
}
declare module 'src/handlers/undefined/undefinedHandler' {
	export function test(value: any): boolean;
	export function format(): any;
	//# sourceMappingURL=undefinedHandler.d.ts.map
}
declare module 'src/handlers/Date/DateHandler' {
	export function test(value: any): boolean;
	export function format(date: any): any;
	//# sourceMappingURL=DateHandler.d.ts.map
}
declare module 'src/options/options' {
	export = options; const options: Store;
	import Store = require('src/Store/Store.js');
	//# sourceMappingURL=options.d.ts.map
}
declare module 'src/handlers/String/StringHandler' {
	export function test(value: any): boolean;
	export function format(str: any): any;
	//# sourceMappingURL=StringHandler.d.ts.map
}
declare module 'src/handlers/Error/ErrorHandler' {
	export function test(value: any): boolean;
	export function format(error: any): any;
	//# sourceMappingURL=ErrorHandler.d.ts.map
}
declare module 'src/handlers/RegExp/RegExpHandler' {
	export function test(value: any): boolean;
	export function format(regex: any): any;
	//# sourceMappingURL=RegExpHandler.d.ts.map
}
declare module 'src/handlers/Promise/PromiseHandler' {
	export function test(value: any): boolean;
	export function format(): any;
	//# sourceMappingURL=PromiseHandler.d.ts.map
}
declare module 'src/handlers/BigInt/BigIntHandler' {
	export function test(value: any): boolean;
	export function format(int: any): any;
	//# sourceMappingURL=BigIntHandler.d.ts.map
}
declare module 'src/labels/labels' {
	export = options; const options: Store;
	import Store = require('src/Store/Store.js');
	//# sourceMappingURL=labels.d.ts.map
}
declare module 'src/handlers/Function/FunctionHandler' {
	export function test(value: any): boolean;
	export function format(func: any): any;
	//# sourceMappingURL=FunctionHandler.d.ts.map
}
declare module 'src/handlers/Symbol/SymbolHandler' {
	export function test(value: any): boolean;
	export function format(symbol: any): any;
	//# sourceMappingURL=SymbolHandler.d.ts.map
}
declare module 'src/handlers/Number/NumberHandler' {
	export function test(value: any): boolean;
	export function format(num: any): any;
	//# sourceMappingURL=NumberHandler.d.ts.map
}
declare module 'src/handlers/Boolean/BooleanHandler' {
	export function test(value: any): boolean;
	export function format(value: any): any;
	//# sourceMappingURL=BooleanHandler.d.ts.map
}
declare module 'src/handlers/Array/ArrayHandler' {
	export let test: (arg: any) => arg is any[];
	export function format(value: any, level: any, seen: any, indent: any, walk: any): any;
	//# sourceMappingURL=ArrayHandler.d.ts.map
}
declare module 'src/handlers/arguments/argumentsHandler' {
	export function test(value: any): boolean;
	export function format(value: any, level: any, seen: any, indent: any, walk: any): any;
	//# sourceMappingURL=argumentsHandler.d.ts.map
}
declare module 'src/handlers/TypedArray/TypedArrayHandler' {
	export function test(value: any): boolean;
	export function format(value: any, level: any, seen: any): any;
	//# sourceMappingURL=TypedArrayHandler.d.ts.map
}
declare module 'src/handlers/WeakMap/WeakMapHandler' {
	export function test(value: any): boolean;
	export function format(value: any): any;
	//# sourceMappingURL=WeakMapHandler.d.ts.map
}
declare module 'src/handlers/Map/MapHandler' {
	export function test(value: any): boolean;
	export function format(value: any, level: any, seen: any, indent: any, walk: any): string;
	//# sourceMappingURL=MapHandler.d.ts.map
}
declare module 'src/handlers/Set/SetHandler' {
	export function test(value: any): boolean;
	export function format(value: any, level: any, seen: any, indent: any, walk: any): any;
	//# sourceMappingURL=SetHandler.d.ts.map
}
declare module 'src/handlers/WeakSet/WeakSetHandler' {
	export function test(value: any): boolean;
	export function format(): any;
	//# sourceMappingURL=WeakSetHandler.d.ts.map
}
declare module 'src/handlers/URL/URLHandler' {
	export function test(value: any): boolean;
	export function format(value: any): any;
	//# sourceMappingURL=URLHandler.d.ts.map
}
declare module 'src/handlers/URLSearchParams/URLSearchParamsHandler' {
	export function test(value: any): boolean;
	export function format(value: any): any;
	//# sourceMappingURL=URLSearchParamsHandler.d.ts.map
}
declare module 'src/handlers/Object/ObjectHandler' {
	export function test(value: any): boolean;
	export function format(value: any, level: any, seen: any, indent: any, walk: any): any;
	//# sourceMappingURL=ObjectHandler.d.ts.map
}
declare module 'src/handlers/handlers' {
	export function add(name: any, handler: any): {
	    add: (name: any, handler: any) => any;
	    remove: (name: any) => any;
	    reset: () => any;
	    list: () => {
	        test: (value: any) => boolean;
	        format: (value: any, level: any, seen: any, indent: any, walk: any) => any;
	    }[];
	};
	export function remove(name: any): {
	    add: (name: any, handler: any) => any;
	    remove: (name: any) => any;
	    reset: () => any;
	    list: () => {
	        test: (value: any) => boolean;
	        format: (value: any, level: any, seen: any, indent: any, walk: any) => any;
	    }[];
	};
	export function reset(): {
	    add: (name: any, handler: any) => any;
	    remove: (name: any) => any;
	    reset: () => any;
	    list: () => {
	        test: (value: any) => boolean;
	        format: (value: any, level: any, seen: any, indent: any, walk: any) => any;
	    }[];
	};
	export function list(): {
	    test: (value: any) => boolean;
	    format: (value: any, level: any, seen: any, indent: any, walk: any) => any;
	}[];
	//# sourceMappingURL=handlers.d.ts.map
}
declare module 'src/indent/indent' {
	export = indent; function indent(level: any): string; namespace indent {
	    function removeAll(str: any): any;
	    function toSpaces(str: any): any;
	}
	//# sourceMappingURL=indent.d.ts.map
}
declare module 'index' {
	export = prettyVarExport; function prettyVarExport(value: any): any; namespace prettyVarExport {
	    /**
	     * Log given values to stdout with a stacktrace label
	     * @param {any[]} args
	     */
	    export function log(...args: any[]): void;
	    export { colors };
	    export { handlers };
	    export { indent };
	    export { labels };
	    export { options };
	}
	import colors = require('src/colors/colors.js');
	import handlers = require('src/handlers/handlers.js');
	import indent = require('src/indent/indent.js');
	import labels = require('src/labels/labels.js');
	import options = require('src/options/options.js');
	//# sourceMappingURL=index.d.ts.map
}
declare function jumpToCode(event: any): void;
//# sourceMappingURL=block-navigation.d.ts.map//# sourceMappingURL=prettify.d.ts.mapdeclare function addSorting(): void;
//# sourceMappingURL=sorter.d.ts.mapdeclare module 'demo/example' {
	export {};
	//# sourceMappingURL=example.d.ts.map
}
declare module 'src/Store/Store.spec' {
	export {};
	//# sourceMappingURL=Store.spec.d.ts.map
}
declare module 'src/colors/colors.spec' {
	export {};
	//# sourceMappingURL=colors.spec.d.ts.map
}
declare module 'src/handlers/handlers.spec' {
	export {};
	//# sourceMappingURL=handlers.spec.d.ts.map
}
declare module 'src/handlers/Array/ArrayHandler.spec' {
	export {};
	//# sourceMappingURL=ArrayHandler.spec.d.ts.map
}
declare module 'src/handlers/BigInt/BigIntHandler.spec' {
	export {};
	//# sourceMappingURL=BigIntHandler.spec.d.ts.map
}
declare module 'src/handlers/Boolean/BooleanHandler.spec' {
	export {};
	//# sourceMappingURL=BooleanHandler.spec.d.ts.map
}
declare module 'src/handlers/Date/DateHandler.spec' {
	export {};
	//# sourceMappingURL=DateHandler.spec.d.ts.map
}
declare module 'src/handlers/Error/ErrorHandler.spec' {
	export {};
	//# sourceMappingURL=ErrorHandler.spec.d.ts.map
}
declare module 'src/handlers/Function/FunctionHandler.spec' {
	export {};
	//# sourceMappingURL=FunctionHandler.spec.d.ts.map
}
declare module 'src/handlers/Map/MapHandler.spec' {
	export {};
	//# sourceMappingURL=MapHandler.spec.d.ts.map
}
declare module 'src/handlers/Number/NumberHandler.spec' {
	export {};
	//# sourceMappingURL=NumberHandler.spec.d.ts.map
}
declare module 'src/handlers/Object/ObjectHandler.spec' {
	export {};
	//# sourceMappingURL=ObjectHandler.spec.d.ts.map
}
declare module 'src/handlers/Promise/PromiseHandler.spec' {
	export {};
	//# sourceMappingURL=PromiseHandler.spec.d.ts.map
}
declare module 'src/handlers/RegExp/RegExpHandler.spec' {
	export {};
	//# sourceMappingURL=RegExpHandler.spec.d.ts.map
}
declare module 'src/handlers/Set/SetHandler.spec' {
	export {};
	//# sourceMappingURL=SetHandler.spec.d.ts.map
}
declare module 'src/handlers/String/StringHandler.spec' {
	export {};
	//# sourceMappingURL=StringHandler.spec.d.ts.map
}
declare module 'src/handlers/Symbol/SymbolHandler.spec' {
	export {};
	//# sourceMappingURL=SymbolHandler.spec.d.ts.map
}
declare module 'src/handlers/TypedArray/TypedArrayHandler.spec' {
	export {};
	//# sourceMappingURL=TypedArrayHandler.spec.d.ts.map
}
declare module 'src/handlers/URL/URLHandler.spec' {
	export {};
	//# sourceMappingURL=URLHandler.spec.d.ts.map
}
declare module 'src/handlers/URLSearchParams/URLSearchParamsHandler.spec' {
	export {};
	//# sourceMappingURL=URLSearchParamsHandler.spec.d.ts.map
}
declare module 'src/handlers/WeakMap/WeakMapHandler.spec' {
	export {};
	//# sourceMappingURL=WeakMapHandler.spec.d.ts.map
}
declare module 'src/handlers/WeakSet/WeakSetHandler.spec' {
	export {};
	//# sourceMappingURL=WeakSetHandler.spec.d.ts.map
}
declare module 'src/handlers/arguments/argumentsHandler.spec' {
	export {};
	//# sourceMappingURL=argumentsHandler.spec.d.ts.map
}
declare module 'src/handlers/null/nullHandler.spec' {
	export {};
	//# sourceMappingURL=nullHandler.spec.d.ts.map
}
declare module 'src/handlers/undefined/undefinedHandler.spec' {
	export {};
	//# sourceMappingURL=undefinedHandler.spec.d.ts.map
}
declare module 'src/indent/indent.spec' {
	export {};
	//# sourceMappingURL=indent.spec.d.ts.map
}
declare module 'src/options/options.spec' {
	export {};
	//# sourceMappingURL=options.spec.d.ts.map
}
