const nullHandler = require('./null/nullHandler.js');
const undefinedHandler = require('./undefined/undefinedHandler.js');

const handlers = [
	nullHandler,
	undefinedHandler,
	dateHandler,
	errorHandler,
	regexpHandler,
	promiseHandler,
	bigintHandler,
	functionHandler,
	symbolHandler,
	stringHandler,
	numberHandler,
	booleanHandler,
	arrayHandler,
	typedArrayHandler,
	weakmapHandler,
	mapHandler,
	weaksetHandler,
	setHandler,
	urlHandler,
	urlSearchParamsHandler,
	objectHandler,
];

module.exports = handlers;
