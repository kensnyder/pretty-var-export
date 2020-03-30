const values = {
	showFunctionBody: false,
};

const options = {
	set: function(name, value) {
		if (typeof name === 'string') {
			values[name] = value;
		} else {
			Object.assign(values, name);
		}
		return options;
	},
	get: function(name) {
		if (typeof name === 'string') {
			return values[name];
		}
		return { ...values };
	},
};

module.exports = options;
