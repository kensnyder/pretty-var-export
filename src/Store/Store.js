function Store(defaults) {
	this.__defaults = defaults;
	this.reset();
}

Object.defineProperty(Store.prototype, 'reset', {
	enumerable: false,
	configurable: false,
	writable: false,
	value: function (field) {
		if (field) {
			this[field] = this.__defaults[field];
		} else {
			Object.assign(this, this.__defaults);
		}
		return this;
	},
});

module.exports = Store;
