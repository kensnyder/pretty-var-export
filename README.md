# pretty-var-export

Export any value to valid and equivalent JavaScript code. Uses syntax coloring
for debugging from the cli.

```bash
npm install pretty-var-export
```

## Usage

```js
const pretty = require('pretty-var-export');

// return string suitable for logging
console.log(pretty(myValue));

// pretty and log
pretty.log(myValue);
```

## Example

![Example](./demo/example.png?raw=true&v=1.1.0)

## Customization

### Additional handlers

Add custom handlers for formatting.

For example, show NaN as a different color than numbers:

```js
const pretty = require('pretty-var-export');

// each handler must have a test and format method
pretty.handlers.add('nan', {
    test: isNaN,
    format: () => pretty.colors.palette.cyan('NaN'),
});

// reset to default list
pretty.handlers.reset();
```

### Remove handler

You can remove handlers by name.

```js
const pretty = require('pretty-var-export');

// see below for list of names
pretty.handlers.remove('nan');

// reset to default list
pretty.handlers.reset();
```

Default handler names:
- arguments
- Array
- BigInt
- Boolean
- Date
- Error
- Function
- Map
- null
- Number
- Object
- Promise
- RegExp
- Set
- String
- Symbol
- TypedArray
- undefined
- URL
- URLSearchParams
- WeakMap
- WeakSet

### Custom indent

By default, indentation is 2 spaces.

```js
const pretty = require('pretty-var-export');

pretty.indent.set(4); // 4 spaces
pretty.indent.set('    '); // 4 spaces
pretty.indent.set('\t'); // tab

// reset to default
pretty.indent.reset();
```

### Custom colors

Colors include the following:
- `boolean` for true and false (default yellow)
- `comment` for comments (default gray)
- `constructor` for instantiation (default blue)
- `escape` for string escapes (default yellowBright)
- `null` for null (default yellow)
- `number` for numbers, NaN, Infinity (default red)
- `property` for object property names (default cyan)
- `regexp` for bodies of regular expressions (default blue)
- `string` for strings (default green)
- `symbol` for quotes, braces, parens, commas, colons (default white)
- `undefined` for undefined (default yellow)

```js
const pretty = require('pretty-var-export');

// existing color functions from the ansi-colors npm package
pretty.colors.symbol = pretty.colors.palette.blueBright;

// use any other function
pretty.colors.string = chalk.green;

// disable all coloring
pretty.colors.disable();

// reset to default colors and re-enable coloring
pretty.colors.reset();
```

## Custom display options

There are a few options that can change display.

```js
const pretty = require('pretty-var-export');
 
// if true, show function bodies (default=false)
pretty.options.showFunctionBody = false;

// the max length for strings (default=4096)
pretty.options.maxStringLength = 1024 * 4;

// max number of items to list (default=100)
pretty.options.maxListItems = 100;

// output multi-line strings with backticks (default=true)
pretty.options.preferBackticks = true; 
 
// reset to defaults
pretty.options.reset();
```

## Custom labels

Labels can be changed or translated.

```js
const pretty = require('pretty-var-export');

// defaults
pretty.labels.circularReference = 'Circular Reference';
pretty.labels.codeOmitted = 'Code Omitted';
pretty.labels.itemsUnknown = 'Items Unknown';

// reset to defaults
pretty.labels.reset();
```

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)

## Contributing

Please open a ticket or PR on GitHub.

## License

[MIT License](./LICENSE)
