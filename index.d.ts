declare module 'src/colors/colors' {
	import * as c from 'ansi-colors'; const colors: {
	    reset: () => any & {
	        boolean: c.StyleFunction;
	        comment: c.StyleFunction;
	        constructor: c.StyleFunction;
	        escape: c.StyleFunction;
	        null: c.StyleFunction;
	        number: c.StyleFunction;
	        property: c.StyleFunction;
	        regexp: c.StyleFunction;
	        string: c.StyleFunction;
	        symbol: c.StyleFunction;
	        undefined: c.StyleFunction;
	        palette: typeof c;
	        unstyle: typeof c.unstyle;
	    };
	    disable: () => void;
	    boolean: c.StyleFunction;
	    comment: c.StyleFunction;
	    constructor: c.StyleFunction;
	    escape: c.StyleFunction;
	    null: c.StyleFunction;
	    number: c.StyleFunction;
	    property: c.StyleFunction;
	    regexp: c.StyleFunction;
	    string: c.StyleFunction;
	    symbol: c.StyleFunction;
	    undefined: c.StyleFunction;
	    palette: typeof c;
	    unstyle: typeof c.unstyle;
	};
	export default colors;

}
declare module 'src/handlers/null/nullHandler' {
	 const nullHandler: {
	    test: (value: unknown) => value is null;
	    format: () => string;
	};
	export default nullHandler;

}
declare module 'src/handlers/undefined/undefinedHandler' {
	 const undefinedHandler: {
	    test: (value: unknown) => value is undefined;
	    format: () => string;
	};
	export default undefinedHandler;

}
declare module 'src/handlers/Date/DateHandler' {
	 const dateHandler: {
	    test: (value: unknown) => value is Date;
	    format: (date: Date) => string;
	};
	export default dateHandler;

}
declare module 'src/options/options' {
	 const options: {
	    reset: () => any & {
	        showFunctionBody: boolean;
	        maxStringLength: number;
	        maxListItems: number;
	        preferBackticks: boolean;
	        quoteStyle: string;
	        _indentChars: string;
	    };
	    get indent(): string;
	    set indent(numOrCharacters: number | string);
	    showFunctionBody: boolean;
	    maxStringLength: number;
	    maxListItems: number;
	    preferBackticks: boolean;
	    quoteStyle: string;
	    _indentChars: string;
	};
	export default options;

}
declare module 'src/handlers/String/StringHandler' {
	 const StringHandler: {
	    test: (value: any) => value is string | String;
	    format: (str: any) => string;
	};
	export default StringHandler;

}
declare module 'src/handlers/Error/ErrorHandler' {
	 const ErrorHandler: {
	    test: (value: unknown) => value is Error;
	    format: (error: Error) => string;
	};
	export default ErrorHandler;

}
declare module 'src/handlers/RegExp/RegExpHandler' {
	 const RegExpHandler: {
	    test: (value: unknown) => value is RegExp;
	    format: (regex: RegExp) => string;
	};
	export default RegExpHandler;

}
declare module 'src/handlers/Promise/PromiseHandler' {
	 const PromiseHandler: {
	    test: (value: unknown) => value is Promise<any>;
	    format: (_: any) => string;
	};
	export default PromiseHandler;

}
declare module 'src/handlers/BigInt/BigIntHandler' {
	 const BigIntHandler: {
	    test: (value: unknown) => value is bigint;
	    format: (int: BigInt) => string;
	};
	export default BigIntHandler;

}
declare module 'src/labels/labels' {
	 const labels: {
	    reset: () => any & {
	        circularReference: string;
	        codeOmitted: string;
	        itemsUnknown: string;
	    };
	    circularReference: string;
	    codeOmitted: string;
	    itemsUnknown: string;
	};
	export default labels;

}
declare module 'src/handlers/Function/FunctionHandler' {
	 const FunctionHandler: {
	    test: (value: unknown) => value is Function;
	    format: (func: Function) => string;
	};
	export default FunctionHandler;

}
declare module 'src/handlers/Symbol/SymbolHandler' {
	 const SymbolHandler: {
	    test: (value: unknown) => value is symbol;
	    format: (symbol: symbol) => string;
	};
	export default SymbolHandler;

}
declare module 'src/handlers/Number/NumberHandler' {
	 const NumberHandler: {
	    test: (value: unknown) => value is number | Number;
	    format: import("ansi-colors").StyleFunction;
	};
	export default NumberHandler;

}
declare module 'src/handlers/Boolean/BooleanHandler' {
	 const BooleanHandler: {
	    test: (value: unknown) => value is boolean | Boolean;
	    format: (value: boolean | Boolean) => string;
	};
	export default BooleanHandler;

}
declare module 'src/handlers/Array/ArrayHandler' {
	 const ArrayHandler: {
	    test: (arg: any) => arg is any[];
	    format: (value: any[], level: number, seen: boolean, indent: (level: number) => string, walk: (value: unknown, level: number) => string) => string;
	};
	export default ArrayHandler;

}
declare module 'src/handlers/arguments/argumentsHandler' {
	 const argumentsHandler: {
	    test: (value: any) => boolean;
	    format: (value: any, level: any, seen: any, indent: any, walk: any) => string;
	};
	export default argumentsHandler;

}
declare module 'src/handlers/TypedArray/TypedArrayHandler' {
	type TypedArrayShape = Buffer | BigInt64Array | BigUint64Array | Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array; const TypedArrayHandler: {
	    test: (value: any) => value is Buffer | BigInt64Array | BigUint64Array | Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array;
	    format: (value: TypedArrayShape, _: any, seen: boolean) => string;
	};
	export default TypedArrayHandler;

}
declare module 'src/handlers/WeakMap/WeakMapHandler' {
	 const WeakmapHandler: {
	    test: (value: unknown) => value is WeakMap<WeakKey, any>;
	    format: (_: any) => string;
	};
	export default WeakmapHandler;

}
declare module 'src/handlers/Map/MapHandler' {
	 const MapHandler: {
	    test: (value: unknown) => value is Map<any, any>;
	    format: (value: Map<any, any>, level: number, _: any, indent: (level: number) => string, walk: (value: Map<any, any>) => string) => string;
	};
	export default MapHandler;

}
declare module 'src/types' {
	export type Formatter = (value: any, level?: number, seen?: Set<unknown>, indent?: (level: number) => string, walk?: Formatter) => string;

}
declare module 'src/handlers/Set/SetHandler' {
	import { Formatter } from 'src/types'; const SetHandler: {
	    test: (value: unknown) => value is Set<any>;
	    format: (value: Set<unknown> | unknown[], level: number, seen: Set<unknown>, indent: (level: number) => string, walk: Formatter) => string;
	};
	export default SetHandler;

}
declare module 'src/handlers/WeakSet/WeakSetHandler' {
	 const WeakSetHandler: {
	    test: (value: unknown) => value is WeakSet<WeakKey>;
	    format: (_: any) => string;
	};
	export default WeakSetHandler;

}
declare module 'src/handlers/URL/URLHandler' {
	 const URLHandler: {
	    test: (value: unknown) => value is URL;
	    format: (value: URL) => string;
	};
	export default URLHandler;

}
declare module 'src/handlers/URLSearchParams/URLSearchParamsHandler' {
	 const URLSearchParamsHandler: {
	    test: (value: unknown) => value is URLSearchParams;
	    format: (value: URLSearchParams) => string;
	};
	export default URLSearchParamsHandler;

}
declare module 'src/handlers/Object/ObjectHandler' {
	 const ObjectHandler: {
	    test: (value: unknown) => value is object | null;
	    format: (value: Record<string, unknown>, level: number, seen: boolean, indent: (level: number) => string, walk: (value: unknown, level: number) => string) => string;
	};
	export default ObjectHandler;

}
declare module 'src/handlers/Entries/EntriesHandler' {
	type HasEntries = FormData | Headers; const EntriesHandler: {
	    test: (value: unknown) => value is FormData | Headers;
	    format: (value: HasEntries, level: number | undefined, _: any, indent: (level: number) => string) => string;
	};
	export default EntriesHandler;

}
declare module 'src/handlers/handlers' {
	import { Formatter } from 'src/types';
	type Handler = {
	    test: (value: unknown) => boolean;
	    format: (...args: any[]) => string;
	}; const handlers: {
	    add(name: string, handler: {
	        test: (value: unknown) => boolean;
	        format: Formatter;
	    }): any;
	    remove(name: string): any;
	    reset(): any;
	    list(): Handler[];
	};
	export default handlers;

}
declare module 'src/indent/indent' {
	 function indent(level: number): string; namespace indent {
	    var removeAll: (str: string) => string;
	    var toSpaces: (str: string) => string;
	}
	export default indent;

}
declare module 'index' {
	 function pretty(value: unknown): string | undefined; namespace pretty {
	    var log: (...args: any[]) => void;
	    var colors: {
	        reset: () => any & {
	            boolean: import("ansi-colors").StyleFunction;
	            comment: import("ansi-colors").StyleFunction;
	            constructor: import("ansi-colors").StyleFunction;
	            escape: import("ansi-colors").StyleFunction;
	            null: import("ansi-colors").StyleFunction;
	            number: import("ansi-colors").StyleFunction;
	            property: import("ansi-colors").StyleFunction;
	            regexp: import("ansi-colors").StyleFunction;
	            string: import("ansi-colors").StyleFunction;
	            symbol: import("ansi-colors").StyleFunction;
	            undefined: import("ansi-colors").StyleFunction;
	            palette: typeof import("ansi-colors");
	            unstyle: typeof import("ansi-colors").unstyle;
	        };
	        disable: () => void;
	        boolean: import("ansi-colors").StyleFunction;
	        comment: import("ansi-colors").StyleFunction;
	        constructor: import("ansi-colors").StyleFunction;
	        escape: import("ansi-colors").StyleFunction;
	        null: import("ansi-colors").StyleFunction;
	        number: import("ansi-colors").StyleFunction;
	        property: import("ansi-colors").StyleFunction;
	        regexp: import("ansi-colors").StyleFunction;
	        string: import("ansi-colors").StyleFunction;
	        symbol: import("ansi-colors").StyleFunction;
	        undefined: import("ansi-colors").StyleFunction;
	        palette: typeof import("ansi-colors");
	        unstyle: typeof import("ansi-colors").unstyle;
	    };
	    var handlers: {
	        add(name: string, handler: {
	            test: (value: unknown) => boolean;
	            format: import("./src/types").Formatter;
	        }): any;
	        remove(name: string): any;
	        reset(): any;
	        list(): {
	            test: (value: unknown) => boolean;
	            format: (...args: any[]) => string;
	        }[];
	    };
	    var indent: typeof import("./src/indent/indent").default;
	    var labels: {
	        reset: () => any & {
	            circularReference: string;
	            codeOmitted: string;
	            itemsUnknown: string;
	        };
	        circularReference: string;
	        codeOmitted: string;
	        itemsUnknown: string;
	    };
	    var options: {
	        reset: () => any & {
	            showFunctionBody: boolean;
	            maxStringLength: number;
	            maxListItems: number;
	            preferBackticks: boolean;
	            quoteStyle: string;
	            _indentChars: string;
	        };
	        get indent(): string;
	        set indent(numOrCharacters: number | string);
	        showFunctionBody: boolean;
	        maxStringLength: number;
	        maxListItems: number;
	        preferBackticks: boolean;
	        quoteStyle: string;
	        _indentChars: string;
	    };
	}
	export default pretty;

}
declare module 'vitest.config' {
	 const _default: import("vite").UserConfig;
	export default _default;

}
declare function jumpToCode(event: any): void;
//# sourceMappingURL=block-navigation.d.ts.map//# sourceMappingURL=prettify.d.ts.mapdeclare function addSorting(): void;
//# sourceMappingURL=sorter.d.ts.mapdeclare module 'demo/example' {
	export {};
	//# sourceMappingURL=example.d.ts.map
}
declare module 'src/colors/colors.spec' {
	export {};

}
declare module 'src/handlers/handlers.spec' {
	export {};

}
declare module 'src/handlers/Array/ArrayHandler.spec' {
	export {};

}
declare module 'src/handlers/BigInt/BigIntHandler.spec' {
	export {};

}
declare module 'src/handlers/Boolean/BooleanHandler.spec' {
	export {};

}
declare module 'src/handlers/Date/DateHandler.spec' {
	export {};

}
declare module 'src/handlers/Entries/EntriesHandler.spec' {
	export {};

}
declare module 'src/handlers/Error/ErrorHandler.spec' {
	export {};

}
declare module 'src/handlers/Function/FunctionHandler.spec' {
	export {};

}
declare module 'src/handlers/Map/MapHandler.spec' {
	export {};

}
declare module 'src/handlers/Number/NumberHandler.spec' {
	export {};

}
declare module 'src/handlers/Object/ObjectHandler.spec' {
	export {};

}
declare module 'src/handlers/Promise/PromiseHandler.spec' {
	export {};

}
declare module 'src/handlers/RegExp/RegExpHandler.spec' {
	export {};

}
declare module 'src/handlers/Set/SetHandler.spec' {
	export {};

}
declare module 'src/handlers/String/StringHandler.spec' {
	export {};

}
declare module 'src/handlers/Symbol/SymbolHandler.spec' {
	export {};

}
declare module 'src/handlers/TypedArray/TypedArrayHandler.spec' {
	export {};

}
declare module 'src/handlers/URL/URLHandler.spec' {
	export {};

}
declare module 'src/handlers/URLSearchParams/URLSearchParamsHandler.spec' {
	export {};

}
declare module 'src/handlers/WeakMap/WeakMapHandler.spec' {
	export {};

}
declare module 'src/handlers/WeakSet/WeakSetHandler.spec' {
	export {};

}
declare module 'src/handlers/arguments/argumentsHandler.spec' {
	export {};

}
declare module 'src/handlers/null/nullHandler.spec' {
	export {};

}
declare module 'src/handlers/undefined/undefinedHandler.spec' {
	export {};

}
declare module 'src/indent/indent.spec' {
	export {};

}
declare module 'src/options/options.spec' {
	export {};

}
