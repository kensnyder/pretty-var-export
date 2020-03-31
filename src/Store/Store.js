/**
 * Class for creating a data private store
 * with get, set, and reset functions
 */
class Store {
	/**
	 * Create new store with the given defaults
	 * @param {Object} defaults
	 */
	constructor(defaults) {
		this.defaults = defaults;
		this.reset();
		this.set = this.set.bind(this);
		this.get = this.get.bind(this);
		this.reset = this.reset.bind(this);
	}

	/**
	 * Set one or many values in the store
	 * @param {String|Object} name  The property name
	 * @param {*} [value]  The property value
	 * @returns {Store}
	 */
	set(name, value) {
		if (typeof name === 'string') {
			this.values[name] = value;
		} else {
			Object.assign(this.values, name);
		}
		return this;
	}

	/**
	 * Get one or all values in the store
	 * @param {String} [name]  The property name
	 * @returns {*}
	 */
	get(name) {
		if (typeof name === 'string') {
			return this.values[name];
		}
		return { ...values };
	}

	/**
	 * Reset the store back to the default values
	 * @returns {Store}
	 */
	reset() {
		this.values = { ...this.defaults };
		return this;
	}
}

module.exports = Store;
