"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/ansi-colors/symbols.js
var require_symbols = __commonJS({
  "node_modules/ansi-colors/symbols.js"(exports2, module2) {
    "use strict";
    var isHyper = typeof process !== "undefined" && process.env.TERM_PROGRAM === "Hyper";
    var isWindows = typeof process !== "undefined" && process.platform === "win32";
    var isLinux = typeof process !== "undefined" && process.platform === "linux";
    var common = {
      ballotDisabled: "\u2612",
      ballotOff: "\u2610",
      ballotOn: "\u2611",
      bullet: "\u2022",
      bulletWhite: "\u25E6",
      fullBlock: "\u2588",
      heart: "\u2764",
      identicalTo: "\u2261",
      line: "\u2500",
      mark: "\u203B",
      middot: "\xB7",
      minus: "\uFF0D",
      multiplication: "\xD7",
      obelus: "\xF7",
      pencilDownRight: "\u270E",
      pencilRight: "\u270F",
      pencilUpRight: "\u2710",
      percent: "%",
      pilcrow2: "\u2761",
      pilcrow: "\xB6",
      plusMinus: "\xB1",
      question: "?",
      section: "\xA7",
      starsOff: "\u2606",
      starsOn: "\u2605",
      upDownArrow: "\u2195"
    };
    var windows = Object.assign({}, common, {
      check: "\u221A",
      cross: "\xD7",
      ellipsisLarge: "...",
      ellipsis: "...",
      info: "i",
      questionSmall: "?",
      pointer: ">",
      pointerSmall: "\xBB",
      radioOff: "( )",
      radioOn: "(*)",
      warning: "\u203C"
    });
    var other = Object.assign({}, common, {
      ballotCross: "\u2718",
      check: "\u2714",
      cross: "\u2716",
      ellipsisLarge: "\u22EF",
      ellipsis: "\u2026",
      info: "\u2139",
      questionFull: "\uFF1F",
      questionSmall: "\uFE56",
      pointer: isLinux ? "\u25B8" : "\u276F",
      pointerSmall: isLinux ? "\u2023" : "\u203A",
      radioOff: "\u25EF",
      radioOn: "\u25C9",
      warning: "\u26A0"
    });
    module2.exports = isWindows && !isHyper ? windows : other;
    Reflect.defineProperty(module2.exports, "common", { enumerable: false, value: common });
    Reflect.defineProperty(module2.exports, "windows", { enumerable: false, value: windows });
    Reflect.defineProperty(module2.exports, "other", { enumerable: false, value: other });
  }
});

// node_modules/ansi-colors/index.js
var require_ansi_colors = __commonJS({
  "node_modules/ansi-colors/index.js"(exports2, module2) {
    "use strict";
    var isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    var ANSI_REGEX = /[\u001b\u009b][[\]#;?()]*(?:(?:(?:[^\W_]*;?[^\W_]*)\u0007)|(?:(?:[0-9]{1,4}(;[0-9]{0,4})*)?[~0-9=<>cf-nqrtyA-PRZ]))/g;
    var hasColor = () => {
      if (typeof process !== "undefined") {
        return process.env.FORCE_COLOR !== "0";
      }
      return false;
    };
    var create = () => {
      const colors2 = {
        enabled: hasColor(),
        visible: true,
        styles: {},
        keys: {}
      };
      const ansi = (style2) => {
        let open = style2.open = `\x1B[${style2.codes[0]}m`;
        let close = style2.close = `\x1B[${style2.codes[1]}m`;
        let regex = style2.regex = new RegExp(`\\u001b\\[${style2.codes[1]}m`, "g");
        style2.wrap = (input, newline) => {
          if (input.includes(close)) input = input.replace(regex, close + open);
          let output = open + input + close;
          return newline ? output.replace(/\r*\n/g, `${close}$&${open}`) : output;
        };
        return style2;
      };
      const wrap = (style2, input, newline) => {
        return typeof style2 === "function" ? style2(input) : style2.wrap(input, newline);
      };
      const style = (input, stack) => {
        if (input === "" || input == null) return "";
        if (colors2.enabled === false) return input;
        if (colors2.visible === false) return "";
        let str = "" + input;
        let nl = str.includes("\n");
        let n = stack.length;
        if (n > 0 && stack.includes("unstyle")) {
          stack = [.../* @__PURE__ */ new Set(["unstyle", ...stack])].reverse();
        }
        while (n-- > 0) str = wrap(colors2.styles[stack[n]], str, nl);
        return str;
      };
      const define = (name, codes, type) => {
        colors2.styles[name] = ansi({ name, codes });
        let keys = colors2.keys[type] || (colors2.keys[type] = []);
        keys.push(name);
        Reflect.defineProperty(colors2, name, {
          configurable: true,
          enumerable: true,
          set(value) {
            colors2.alias(name, value);
          },
          get() {
            let color = (input) => style(input, color.stack);
            Reflect.setPrototypeOf(color, colors2);
            color.stack = this.stack ? this.stack.concat(name) : [name];
            return color;
          }
        });
      };
      define("reset", [0, 0], "modifier");
      define("bold", [1, 22], "modifier");
      define("dim", [2, 22], "modifier");
      define("italic", [3, 23], "modifier");
      define("underline", [4, 24], "modifier");
      define("inverse", [7, 27], "modifier");
      define("hidden", [8, 28], "modifier");
      define("strikethrough", [9, 29], "modifier");
      define("black", [30, 39], "color");
      define("red", [31, 39], "color");
      define("green", [32, 39], "color");
      define("yellow", [33, 39], "color");
      define("blue", [34, 39], "color");
      define("magenta", [35, 39], "color");
      define("cyan", [36, 39], "color");
      define("white", [37, 39], "color");
      define("gray", [90, 39], "color");
      define("grey", [90, 39], "color");
      define("bgBlack", [40, 49], "bg");
      define("bgRed", [41, 49], "bg");
      define("bgGreen", [42, 49], "bg");
      define("bgYellow", [43, 49], "bg");
      define("bgBlue", [44, 49], "bg");
      define("bgMagenta", [45, 49], "bg");
      define("bgCyan", [46, 49], "bg");
      define("bgWhite", [47, 49], "bg");
      define("blackBright", [90, 39], "bright");
      define("redBright", [91, 39], "bright");
      define("greenBright", [92, 39], "bright");
      define("yellowBright", [93, 39], "bright");
      define("blueBright", [94, 39], "bright");
      define("magentaBright", [95, 39], "bright");
      define("cyanBright", [96, 39], "bright");
      define("whiteBright", [97, 39], "bright");
      define("bgBlackBright", [100, 49], "bgBright");
      define("bgRedBright", [101, 49], "bgBright");
      define("bgGreenBright", [102, 49], "bgBright");
      define("bgYellowBright", [103, 49], "bgBright");
      define("bgBlueBright", [104, 49], "bgBright");
      define("bgMagentaBright", [105, 49], "bgBright");
      define("bgCyanBright", [106, 49], "bgBright");
      define("bgWhiteBright", [107, 49], "bgBright");
      colors2.ansiRegex = ANSI_REGEX;
      colors2.hasColor = colors2.hasAnsi = (str) => {
        colors2.ansiRegex.lastIndex = 0;
        return typeof str === "string" && str !== "" && colors2.ansiRegex.test(str);
      };
      colors2.alias = (name, color) => {
        let fn = typeof color === "string" ? colors2[color] : color;
        if (typeof fn !== "function") {
          throw new TypeError("Expected alias to be the name of an existing color (string) or a function");
        }
        if (!fn.stack) {
          Reflect.defineProperty(fn, "name", { value: name });
          colors2.styles[name] = fn;
          fn.stack = [name];
        }
        Reflect.defineProperty(colors2, name, {
          configurable: true,
          enumerable: true,
          set(value) {
            colors2.alias(name, value);
          },
          get() {
            let color2 = (input) => style(input, color2.stack);
            Reflect.setPrototypeOf(color2, colors2);
            color2.stack = this.stack ? this.stack.concat(fn.stack) : fn.stack;
            return color2;
          }
        });
      };
      colors2.theme = (custom) => {
        if (!isObject(custom)) throw new TypeError("Expected theme to be an object");
        for (let name of Object.keys(custom)) {
          colors2.alias(name, custom[name]);
        }
        return colors2;
      };
      colors2.alias("unstyle", (str) => {
        if (typeof str === "string" && str !== "") {
          colors2.ansiRegex.lastIndex = 0;
          return str.replace(colors2.ansiRegex, "");
        }
        return "";
      });
      colors2.alias("noop", (str) => str);
      colors2.none = colors2.clear = colors2.noop;
      colors2.stripColor = colors2.unstyle;
      colors2.symbols = require_symbols();
      colors2.define = define;
      return colors2;
    };
    module2.exports = create();
    module2.exports.create = create;
  }
});

// node_modules/jsesc/jsesc.js
var require_jsesc = __commonJS({
  "node_modules/jsesc/jsesc.js"(exports2, module2) {
    "use strict";
    var object = {};
    var hasOwnProperty = object.hasOwnProperty;
    var forOwn = (object2, callback) => {
      for (const key in object2) {
        if (hasOwnProperty.call(object2, key)) {
          callback(key, object2[key]);
        }
      }
    };
    var extend = (destination, source) => {
      if (!source) {
        return destination;
      }
      forOwn(source, (key, value) => {
        destination[key] = value;
      });
      return destination;
    };
    var forEach = (array, callback) => {
      const length = array.length;
      let index = -1;
      while (++index < length) {
        callback(array[index]);
      }
    };
    var fourHexEscape = (hex) => {
      return "\\u" + ("0000" + hex).slice(-4);
    };
    var hexadecimal = (code, lowercase) => {
      let hexadecimal2 = code.toString(16);
      if (lowercase) return hexadecimal2;
      return hexadecimal2.toUpperCase();
    };
    var toString = object.toString;
    var isArray = Array.isArray;
    var isBuffer = (value) => {
      return typeof Buffer === "function" && Buffer.isBuffer(value);
    };
    var isObject = (value) => {
      return toString.call(value) == "[object Object]";
    };
    var isString = (value) => {
      return typeof value == "string" || toString.call(value) == "[object String]";
    };
    var isNumber = (value) => {
      return typeof value == "number" || toString.call(value) == "[object Number]";
    };
    var isFunction = (value) => {
      return typeof value == "function";
    };
    var isMap = (value) => {
      return toString.call(value) == "[object Map]";
    };
    var isSet = (value) => {
      return toString.call(value) == "[object Set]";
    };
    var singleEscapes = {
      "\\": "\\\\",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t"
      // `\v` is omitted intentionally, because in IE < 9, '\v' == 'v'.
      // '\v': '\\x0B'
    };
    var regexSingleEscape = /[\\\b\f\n\r\t]/;
    var regexDigit = /[0-9]/;
    var regexWhitespace = /[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
    var escapeEverythingRegex = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g;
    var escapeNonAsciiRegex = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g;
    var jsesc2 = (argument, options2) => {
      const increaseIndentation = () => {
        oldIndent = indent2;
        ++options2.indentLevel;
        indent2 = options2.indent.repeat(options2.indentLevel);
      };
      const defaults = {
        "escapeEverything": false,
        "minimal": false,
        "isScriptContext": false,
        "quotes": "single",
        "wrap": false,
        "es6": false,
        "json": false,
        "compact": true,
        "lowercaseHex": false,
        "numbers": "decimal",
        "indent": "	",
        "indentLevel": 0,
        "__inline1__": false,
        "__inline2__": false
      };
      const json = options2 && options2.json;
      if (json) {
        defaults.quotes = "double";
        defaults.wrap = true;
      }
      options2 = extend(defaults, options2);
      if (options2.quotes != "single" && options2.quotes != "double" && options2.quotes != "backtick") {
        options2.quotes = "single";
      }
      const quote = options2.quotes == "double" ? '"' : options2.quotes == "backtick" ? "`" : "'";
      const compact = options2.compact;
      const lowercaseHex = options2.lowercaseHex;
      let indent2 = options2.indent.repeat(options2.indentLevel);
      let oldIndent = "";
      const inline1 = options2.__inline1__;
      const inline2 = options2.__inline2__;
      const newLine = compact ? "" : "\n";
      let result;
      let isEmpty = true;
      const useBinNumbers = options2.numbers == "binary";
      const useOctNumbers = options2.numbers == "octal";
      const useDecNumbers = options2.numbers == "decimal";
      const useHexNumbers = options2.numbers == "hexadecimal";
      if (json && argument && isFunction(argument.toJSON)) {
        argument = argument.toJSON();
      }
      if (!isString(argument)) {
        if (isMap(argument)) {
          if (argument.size == 0) {
            return "new Map()";
          }
          if (!compact) {
            options2.__inline1__ = true;
            options2.__inline2__ = false;
          }
          return "new Map(" + jsesc2(Array.from(argument), options2) + ")";
        }
        if (isSet(argument)) {
          if (argument.size == 0) {
            return "new Set()";
          }
          return "new Set(" + jsesc2(Array.from(argument), options2) + ")";
        }
        if (isBuffer(argument)) {
          if (argument.length == 0) {
            return "Buffer.from([])";
          }
          return "Buffer.from(" + jsesc2(Array.from(argument), options2) + ")";
        }
        if (isArray(argument)) {
          result = [];
          options2.wrap = true;
          if (inline1) {
            options2.__inline1__ = false;
            options2.__inline2__ = true;
          }
          if (!inline2) {
            increaseIndentation();
          }
          forEach(argument, (value) => {
            isEmpty = false;
            if (inline2) {
              options2.__inline2__ = false;
            }
            result.push(
              (compact || inline2 ? "" : indent2) + jsesc2(value, options2)
            );
          });
          if (isEmpty) {
            return "[]";
          }
          if (inline2) {
            return "[" + result.join(", ") + "]";
          }
          return "[" + newLine + result.join("," + newLine) + newLine + (compact ? "" : oldIndent) + "]";
        } else if (isNumber(argument)) {
          if (json) {
            return JSON.stringify(argument);
          }
          if (useDecNumbers) {
            return String(argument);
          }
          if (useHexNumbers) {
            let hexadecimal2 = argument.toString(16);
            if (!lowercaseHex) {
              hexadecimal2 = hexadecimal2.toUpperCase();
            }
            return "0x" + hexadecimal2;
          }
          if (useBinNumbers) {
            return "0b" + argument.toString(2);
          }
          if (useOctNumbers) {
            return "0o" + argument.toString(8);
          }
        } else if (!isObject(argument)) {
          if (json) {
            return JSON.stringify(argument) || "null";
          }
          return String(argument);
        } else {
          result = [];
          options2.wrap = true;
          increaseIndentation();
          forOwn(argument, (key, value) => {
            isEmpty = false;
            result.push(
              (compact ? "" : indent2) + jsesc2(key, options2) + ":" + (compact ? "" : " ") + jsesc2(value, options2)
            );
          });
          if (isEmpty) {
            return "{}";
          }
          return "{" + newLine + result.join("," + newLine) + newLine + (compact ? "" : oldIndent) + "}";
        }
      }
      const regex = options2.escapeEverything ? escapeEverythingRegex : escapeNonAsciiRegex;
      result = argument.replace(regex, (char, pair, lone, quoteChar, index, string) => {
        if (pair) {
          if (options2.minimal) return pair;
          const first = pair.charCodeAt(0);
          const second = pair.charCodeAt(1);
          if (options2.es6) {
            const codePoint = (first - 55296) * 1024 + second - 56320 + 65536;
            const hex2 = hexadecimal(codePoint, lowercaseHex);
            return "\\u{" + hex2 + "}";
          }
          return fourHexEscape(hexadecimal(first, lowercaseHex)) + fourHexEscape(hexadecimal(second, lowercaseHex));
        }
        if (lone) {
          return fourHexEscape(hexadecimal(lone.charCodeAt(0), lowercaseHex));
        }
        if (char == "\0" && !json && !regexDigit.test(string.charAt(index + 1))) {
          return "\\0";
        }
        if (quoteChar) {
          if (quoteChar == quote || options2.escapeEverything) {
            return "\\" + quoteChar;
          }
          return quoteChar;
        }
        if (regexSingleEscape.test(char)) {
          return singleEscapes[char];
        }
        if (options2.minimal && !regexWhitespace.test(char)) {
          return char;
        }
        const hex = hexadecimal(char.charCodeAt(0), lowercaseHex);
        if (json || hex.length > 2) {
          return fourHexEscape(hex);
        }
        return "\\x" + ("00" + hex).slice(-2);
      });
      if (quote == "`") {
        result = result.replace(/\$\{/g, "\\${");
      }
      if (options2.isScriptContext) {
        result = result.replace(/<\/(script|style)/gi, "<\\/$1").replace(/<!--/g, json ? "\\u003C!--" : "\\x3C!--");
      }
      if (options2.wrap) {
        result = quote + result + quote;
      }
      return result;
    };
    jsesc2.version = "3.0.2";
    module2.exports = jsesc2;
  }
});

// index.ts
var pretty_var_export_exports = {};
__export(pretty_var_export_exports, {
  default: () => pretty_var_export_default
});
module.exports = __toCommonJS(pretty_var_export_exports);

// src/colors/colors.ts
var c = __toESM(require_ansi_colors(), 1);
var defaultColors = {
  // colors
  boolean: c.yellow,
  comment: c.gray,
  constructor: c.blue,
  escape: c.yellowBright,
  null: c.yellow,
  number: c.red,
  property: c.cyan,
  regexp: c.blue,
  string: c.green,
  symbol: c.white,
  undefined: c.yellow,
  // palette for more colors
  palette: c,
  // for unit tests
  unstyle: c.unstyle
};
var identity = (v) => v;
var colors = {
  ...defaultColors,
  reset: () => Object.assign(colors, defaultColors),
  disable: () => {
    const functions = "boolean comment constructor escape null number property regexp string symbol undefined";
    functions.split(" ").forEach((name) => {
      colors[name] = identity;
    });
  }
};
var colors_default = colors;

// src/handlers/null/nullHandler.ts
var nullHandler = {
  test: (value) => value === null,
  format: () => colors_default.null("null")
};
var nullHandler_default = nullHandler;

// src/handlers/undefined/undefinedHandler.ts
var undefinedHandler = {
  test: (value) => value === void 0,
  format: () => colors_default.undefined("undefined")
};
var undefinedHandler_default = undefinedHandler;

// src/handlers/Date/DateHandler.ts
var zeropad = (num, len) => (new Array(len).join("0") + String(num)).slice(-len);
var dateHandler = {
  test: (value) => value instanceof Date,
  format: (date) => {
    let dateStr;
    if (isNaN(date.getFullYear())) {
      dateStr = "Invalid Date";
    } else {
      dateStr = date.getFullYear() + "-" + zeropad(date.getMonth() + 1, 2) + "-" + zeropad(date.getDate(), 2) + "T" + zeropad(date.getHours(), 2) + ":" + zeropad(date.getMinutes(), 2) + ":" + zeropad(date.getSeconds(), 2) + "." + zeropad(date.getMilliseconds(), 3);
    }
    return colors_default.constructor("new Date(") + colors_default.symbol('"') + colors_default.string(dateStr) + colors_default.symbol('"') + colors_default.constructor(")");
  }
};
var DateHandler_default = dateHandler;

// src/handlers/String/StringHandler.ts
var import_jsesc = __toESM(require_jsesc(), 1);

// src/options/options.ts
var defaultOptions = {
  // if true, show source code of functions
  showFunctionBody: false,
  // longest string length before ellipsis
  maxStringLength: 1024 * 4,
  // max array items before ellipsis
  maxListItems: 100,
  // if true, use backticks for multi-line string
  preferBackticks: true,
  // allowed: single, double, backtick
  quoteStyle: "double",
  // the string to use for indentation
  _indentChars: "  "
};
var options = {
  ...defaultOptions,
  reset: () => Object.assign(options, defaultOptions),
  get indent() {
    return options._indentChars;
  },
  set indent(numOrCharacters) {
    if (typeof numOrCharacters === "number") {
      this._indentChars = new Array(numOrCharacters + 1).join(" ");
    } else {
      this._indentChars = String(numOrCharacters);
    }
  }
};
var options_default = options;

// src/handlers/String/StringHandler.ts
var escapesToColor = [
  { regex: /\\r/g, replace: "\\r" },
  { regex: /\\n/g, replace: "\\n" },
  { regex: /\\t/g, replace: "\\t" }
];
var quoteChars = {
  single: "'",
  double: '"',
  backtick: "`"
};
var StringHandler = {
  test: (value) => typeof value === "string" || value instanceof String,
  format: (str) => {
    let comment = "";
    let quoteChar;
    const lengthOverage = str.length - options_default.maxStringLength;
    if (lengthOverage > 18) {
      comment = `/* ... +${lengthOverage} chars */`;
      str = str.slice(0, options_default.maxStringLength);
    }
    if (options_default.preferBackticks && str.match(/[\r\n\t]/)) {
      str = (0, import_jsesc.default)(str, { quotes: "backtick", es6: true, wrap: false });
      str = str.replace(/\\r/g, "\r");
      str = str.replace(/\\n/g, "\n");
      quoteChar = "`";
    } else {
      str = (0, import_jsesc.default)(str, { quotes: options_default.quoteStyle, es6: true, wrap: false });
      escapesToColor.forEach((esc) => {
        str = str.replace(esc.regex, colors_default.escape(esc.replace));
      });
      quoteChar = quoteChars[options_default.quoteStyle];
    }
    return colors_default.symbol(quoteChar) + colors_default.string(str) + colors_default.symbol(quoteChar) + colors_default.comment(comment);
  }
};
var StringHandler_default = StringHandler;

// src/handlers/Error/ErrorHandler.ts
var ErrorHandler = {
  test: (value) => value instanceof Error,
  format: (error) => {
    return colors_default.constructor("new Error(") + StringHandler_default.format(error.message) + colors_default.constructor(")");
  }
};
var ErrorHandler_default = ErrorHandler;

// src/handlers/RegExp/RegExpHandler.ts
var RegExpHandler = {
  test: (value) => value instanceof RegExp,
  format: (regex) => {
    const [, expression, flags] = String(regex).match(/^\/(.+?)\/([a-z]*)$/);
    return colors_default.symbol("/") + colors_default.regexp(expression) + colors_default.symbol("/") + colors_default.string(flags);
  }
};
var RegExpHandler_default = RegExpHandler;

// src/handlers/Promise/PromiseHandler.ts
var PromiseHandler = {
  test: (value) => value instanceof Promise,
  format: (_) => {
    return colors_default.constructor("new Promise") + colors_default.symbol("(()") + colors_default.constructor(" => ") + colors_default.symbol("{})");
  }
};
var PromiseHandler_default = PromiseHandler;

// src/handlers/BigInt/BigIntHandler.ts
var BigIntHandler = {
  test: (value) => typeof value === "bigint",
  format: (int) => {
    return colors_default.number(int + "n");
  }
};
var BigIntHandler_default = BigIntHandler;

// src/labels/labels.ts
var defaultLabels = {
  circularReference: "Circular Reference",
  codeOmitted: "Code Omitted",
  itemsUnknown: "Items Unknown"
};
var labels = {
  ...defaultLabels,
  reset: () => Object.assign(labels, defaultLabels)
};
var labels_default = labels;

// src/handlers/Function/FunctionHandler.ts
var FunctionHandler = {
  test: (value) => typeof value === "function",
  format: (func) => {
    if (options_default.showFunctionBody) {
      return colors_default.constructor(func.toString());
    }
    return colors_default.constructor("function") + colors_default.symbol("() {") + colors_default.comment(` /* ${labels_default.codeOmitted} */ `) + colors_default.symbol("}");
  }
};
var FunctionHandler_default = FunctionHandler;

// src/handlers/Symbol/SymbolHandler.ts
var SymbolHandler = {
  test: (value) => typeof value === "symbol",
  format: (symbol) => {
    const description = symbol.description === void 0 ? "" : StringHandler_default.format(symbol.description);
    return colors_default.constructor("Symbol(") + description + colors_default.constructor(")");
  }
};
var SymbolHandler_default = SymbolHandler;

// src/handlers/Number/NumberHandler.ts
var NumberHandler = {
  test: (value) => typeof value === "number" || value instanceof Number,
  format: colors_default.number
};
var NumberHandler_default = NumberHandler;

// src/handlers/Boolean/BooleanHandler.ts
var BooleanHandler = {
  test: (value) => typeof value === "boolean" || value instanceof Boolean,
  // double equals is required to handle both primitive and object Boolean
  format: (value) => colors_default.boolean(value == true ? "true" : "false")
};
var BooleanHandler_default = BooleanHandler;

// src/handlers/Array/ArrayHandler.ts
var ArrayHandler = {
  test: Array.isArray,
  format: (value, level, seen, indent2, walk) => {
    if (value.length === 0) {
      return colors_default.symbol("[]");
    }
    if (seen) {
      return colors_default.symbol("[") + colors_default.comment(` /* ${labels_default.circularReference} */ `) + colors_default.symbol("]");
    }
    let comment = "";
    const lengthOverage = value.length - options_default.maxListItems;
    if (lengthOverage > 1) {
      comment = `/* ... +${lengthOverage} items */`;
      value = value.slice(0, options_default.maxListItems);
    }
    return colors_default.symbol("[") + "\n" + indent2(level + 2) + value.map((v) => walk(v, level + 1)).join(",\n" + indent2(level + 2)) + colors_default.comment(comment) + "\n" + indent2(level + 1) + colors_default.symbol("]");
  }
};
var ArrayHandler_default = ArrayHandler;

// src/handlers/arguments/argumentsHandler.ts
var argumentsHandler = {
  test: (value) => Object.prototype.toString.call(value) === "[object Arguments]",
  format: (value, level, seen, indent2, walk) => {
    return ArrayHandler_default.format(Array.from(value), level, seen, indent2, walk);
  }
};
var argumentsHandler_default = argumentsHandler;

// src/handlers/TypedArray/TypedArrayHandler.ts
var TypedArrayHandler = {
  test: (value) => {
    return typeof Buffer !== "undefined" && value instanceof Buffer || value instanceof BigInt64Array || value instanceof BigUint64Array || value instanceof Int8Array || value instanceof Int16Array || value instanceof Int32Array || value instanceof Uint8Array || value instanceof Uint16Array || value instanceof Uint32Array || value instanceof Uint8ClampedArray || value instanceof Float32Array || value instanceof Float64Array;
  },
  format: (value, _, seen) => {
    const constructorName = value.constructor.name;
    const construct = `${constructorName}.from(`;
    if (seen) {
      return colors_default.constructor(construct) + colors_default.symbol("[") + colors_default.comment(` /* ${labels_default.circularReference} */ `) + colors_default.symbol("]") + colors_default.constructor(")");
    }
    let mapper;
    if (value instanceof BigInt64Array || value instanceof BigUint64Array) {
      mapper = (v) => colors_default.number(String(v) + "n");
    } else {
      mapper = (v) => colors_default.number(String(v));
    }
    value = Array.from(value);
    let comment = "";
    const lengthOverage = value.length - options_default.maxListItems;
    if (lengthOverage > 5) {
      comment = ` /* ... +${lengthOverage} items */`;
      if (typeof Buffer !== "undefined" && value instanceof Buffer) {
        value = Uint8Array.prototype.slice.call(value, 0, options_default.maxListItems);
      } else {
        value = value.slice(0, options_default.maxListItems);
      }
    }
    return colors_default.constructor(construct) + colors_default.symbol("[ ") + value.map(mapper).join(colors_default.symbol(", ")) + colors_default.comment(comment) + colors_default.symbol(" ]") + colors_default.constructor(")");
  }
};
var TypedArrayHandler_default = TypedArrayHandler;

// src/handlers/WeakMap/WeakMapHandler.ts
var WeakmapHandler = {
  test: (value) => value instanceof WeakMap,
  format: (_) => {
    return colors_default.constructor("new WeakMap(") + colors_default.comment(` /* ${labels_default.itemsUnknown} */ `) + colors_default.constructor(")");
  }
};
var WeakMapHandler_default = WeakmapHandler;

// src/handlers/Map/MapHandler.ts
var MapHandler = {
  test: (value) => value instanceof Map,
  format: (value, level, _, indent2, walk) => {
    return colors_default.constructor("new Map(") + colors_default.symbol("[\n") + Array.from(value).map((pair) => {
      return indent2(level + 2) + colors_default.symbol("[") + walk(pair[0]) + colors_default.symbol(", ") + walk(pair[1]) + colors_default.symbol("]");
    }).join(",\n") + "\n" + indent2(level + 1) + colors_default.symbol("]") + colors_default.constructor(")");
  }
};
var MapHandler_default = MapHandler;

// src/handlers/Set/SetHandler.ts
var SetHandler = {
  test: (value) => value instanceof Set,
  format: (value, level, seen, indent2, walk) => {
    if (seen) {
      return colors_default.constructor("new Set(") + colors_default.comment(` /* ${labels_default.circularReference} */ `) + colors_default.constructor(")");
    }
    return colors_default.constructor("new Set(") + walk(Array.from(value), level, seen, indent2, walk) + colors_default.constructor(")");
  }
};
var SetHandler_default = SetHandler;

// src/handlers/WeakSet/WeakSetHandler.ts
var WeakSetHandler = {
  test: (value) => value instanceof WeakSet,
  format: (_) => {
    return colors_default.constructor("new WeakSet(") + colors_default.comment(` /* ${labels_default.itemsUnknown} */ `) + colors_default.constructor(")");
  }
};
var WeakSetHandler_default = WeakSetHandler;

// src/handlers/URL/URLHandler.ts
var URLHandler = {
  test: (value) => value instanceof URL,
  format: (value) => {
    return colors_default.constructor("new URL(") + StringHandler_default.format(value.href) + colors_default.constructor(")");
  }
};
var URLHandler_default = URLHandler;

// src/handlers/URLSearchParams/URLSearchParamsHandler.ts
var URLSearchParamsHandler = {
  test: (value) => value instanceof URLSearchParams,
  format: (value) => {
    return colors_default.constructor("new URLSearchParams(") + colors_default.symbol('"') + colors_default.string(value.toString()) + colors_default.symbol('"') + colors_default.constructor(")");
  }
};
var URLSearchParamsHandler_default = URLSearchParamsHandler;

// src/handlers/Object/ObjectHandler.ts
var ObjectHandler = {
  test: (value) => typeof value === "object",
  format: (value, level, seen, indent2, walk) => {
    if (seen) {
      return colors_default.symbol("{") + colors_default.comment(` /* ${labels_default.circularReference} */ `) + colors_default.symbol("}");
    }
    const keys = Object.keys(value);
    if (keys.length === 0) {
      return colors_default.symbol("{}");
    }
    return colors_default.symbol("{") + "\n" + keys.map((prop) => {
      const val = value[prop];
      return indent2(level + 2) + property(prop) + colors_default.symbol(": ") + walk(val, level + 1);
    }).join(",\n") + "\n" + indent2(level + 1) + colors_default.symbol("}");
  }
};
function property(str) {
  if (str.match(/^[a-z$_]+[\w$_]*$/i)) {
    return colors_default.property(str);
  }
  return colors_default.symbol('"') + colors_default.property(str.replace(/"/g, '\\"')) + colors_default.symbol('"');
}
var ObjectHandler_default = ObjectHandler;

// src/handlers/Entries/EntriesHandler.ts
var EntriesHandler = {
  test: (value) => value instanceof FormData || value instanceof Headers,
  format: (value, level = 0, _, indent2) => {
    const name = value.constructor.name;
    const entries = Array.from(value.entries());
    return colors_default.constructor(`${name}(`) + colors_default.symbol("[") + "\n" + entries.slice(0, options_default.maxListItems).map(([key, value2]) => {
      return indent2(level + 2) + colors_default.symbol("[") + StringHandler_default.format(key) + ", " + StringHandler_default.format(String(value2)) + colors_default.symbol("],") + "\n";
    }).join("") + maybeEllipsis(entries, level, indent2) + colors_default.symbol("]") + colors_default.constructor(")");
  }
};
function maybeEllipsis(value, level, indent2) {
  if (value.length > options_default.maxListItems) {
    const lengthOverage = value.length - options_default.maxListItems;
    return "\n" + indent2(level + 2) + colors_default.comment(`/* ... +${lengthOverage} items */`) + "\n";
  }
  return "";
}
var EntriesHandler_default = EntriesHandler;

// src/handlers/handlers.ts
var defaultList = [
  { name: "null", handler: nullHandler_default },
  { name: "undefined", handler: undefinedHandler_default },
  { name: "Date", handler: DateHandler_default },
  { name: "Error", handler: ErrorHandler_default },
  { name: "RegExp", handler: RegExpHandler_default },
  { name: "Promise", handler: PromiseHandler_default },
  { name: "BigInt", handler: BigIntHandler_default },
  { name: "Function", handler: FunctionHandler_default },
  { name: "Symbol", handler: SymbolHandler_default },
  { name: "String", handler: StringHandler_default },
  { name: "Number", handler: NumberHandler_default },
  { name: "Boolean", handler: BooleanHandler_default },
  { name: "arguments", handler: argumentsHandler_default },
  { name: "Array", handler: ArrayHandler_default },
  { name: "TypedArray", handler: TypedArrayHandler_default },
  { name: "WeakMap", handler: WeakMapHandler_default },
  { name: "Map", handler: MapHandler_default },
  { name: "Set", handler: SetHandler_default },
  { name: "WeakSet", handler: WeakSetHandler_default },
  { name: "URL", handler: URLHandler_default },
  { name: "URLSearchParams", handler: URLSearchParamsHandler_default },
  { name: "Entries", handler: EntriesHandler_default },
  { name: "Object", handler: ObjectHandler_default }
];
var list = [...defaultList];
var handlers = {
  add(name, handler) {
    list = [{ name, handler }, ...list];
    return this;
  },
  remove(name) {
    list = list.filter((item) => item.name !== name);
    return this;
  },
  reset() {
    list = [...defaultList];
    return this;
  },
  list() {
    return list.map((item) => item.handler);
  }
};
var handlers_default = handlers;

// src/indent/indent.ts
function indent(level) {
  return new Array(level).join(options_default.indent);
}
indent.removeAll = function(str) {
  return str.replace(/\s+/g, "");
};
indent.toSpaces = function(str) {
  return str.replace(/\s+/g, " ");
};

// index.ts
var pretty = (value) => {
  const objectsSeen = /* @__PURE__ */ new Set();
  return walk(value, 0);
  function walk(value2, level) {
    for (const handler of handlers_default.list()) {
      if (handler.test(value2)) {
        if (typeof value2 === "object") {
          const seen = objectsSeen.has(value2);
          const output = handler.format(value2, level, seen, indent, walk);
          objectsSeen.add(value2);
          return output;
        }
        return handler.format(value2, level, false, indent, walk);
      }
    }
  }
};
pretty.log = (...args) => {
  try {
    const fromLine = new Error().stack?.split("\n")[2].trim() || "";
    console.log(`pretty-var-export ${fromLine}`);
  } catch (e) {
  }
  if (typeof process === "undefined" || typeof process.stdout === "undefined") {
    console.log(pretty(args));
  } else {
    args.forEach((value) => {
      process.stdout.write(pretty(value) + "\n");
    });
  }
};
pretty.colors = colors_default;
pretty.handlers = handlers_default;
pretty.labels = labels_default;
pretty.options = options_default;
var pretty_var_export_default = pretty;
