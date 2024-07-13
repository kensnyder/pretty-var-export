const defaultLabels = {
	circularReference: 'Circular Reference',
	codeOmitted: 'Code Omitted',
	itemsUnknown: 'Items Unknown',
};

const labels = {
	...defaultLabels,
	reset: () => Object.assign(labels, defaultLabels),
};

export default labels;
