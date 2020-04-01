# pretty-var-export

Export any value to valid and equivalent JavaScript code.

```bash
npm install pretty-var-export
```

## Usage

```js
const prettify = require('pretty-var-export');

// return string suitable for logging
console.log(prettify(myValue));

// prettify and log
prettify.log(myValue);
```

## Example

![Example](./demo/example.png?raw=true&v=1.1.0)

## Customization

### Additional handlers

Add custom handlers for formatting.

For example, show NaN as a different color than numbers:

```js
const prettify = require('pretty-var-export');

// each handler must have a test and format method
prettify.handlers.add('nan', {
    test: isNaN,
    format: () => prettify.colors.palette.cyan('NaN'),
});

// reset to default list
prettify.handlers.reset();
```

### Remove handler

You can remove handlers by name.

```js
const prettify = require('pretty-var-export');

// see below for list of names
prettify.handlers.remove('nan');

// reset to default list
prettify.handlers.reset();
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
const prettify = require('pretty-var-export');

prettify.indent.set(4); // 4 spaces
prettify.indent.set('    '); // 4 spaces
prettify.indent.set('\t'); // tab

// reset to default
prettify.indent.reset();
```

### Custom colors

Colors include the following:
- `boolean` (default yellow)
- `comment` (default gray)
- `constructor` (default blue)
- `null` (default yellow)
- `number` (default red)
- `property` (default cyan)
- `regexp` (default blue)
- `string` (default green)
- `symbol` (default white)
- `undefined` (default yellow)

```js
const prettify = require('pretty-var-export');

// existing color functions from the ansi-colors npm package
prettify.colors.symbol = prettify.colors.palette.blueBright;

// use any other function
prettify.colors.string = chalk.green;

// reset to defaults
prettify.colors.reset();
```

## Custom display options

There are a few options that can change display.

```js
const prettify = require('pretty-var-export');
 
// if true, show function bodies (default=false)
prettify.options.showFunctionBody = false;

// the max length for strings (default=4096)
prettify.options.maxStringLength = 1024 * 4;

// max number of items to list (default=100)
prettify.options.maxArrayItems = 100;
 
// reset to defaults
prettify.options.reset();
```

## Custom labels

Labels can be changed or translated.

```js
const prettify = require('pretty-var-export');

// defaults
prettify.labels.circularReference = 'Circular Reference';
prettify.labels.codeOmitted = 'Code Omitted';
prettify.labels.itemsUnknown = 'Items Unknown';

// reset to defaults
prettify.labels.reset();
```

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)

## Contributing

Please open a ticket or PR on GitHub.

## License

[MIT License](./LICENSE)
