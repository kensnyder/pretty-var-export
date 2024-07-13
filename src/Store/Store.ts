export default class Store<D> {
	private __defaults: D;
	constructor(defaults: D) {
		this.__defaults = defaults;
		this.reset();
	}
	reset(field?: string) {
		if (field) {
			this[field] = this.__defaults[field];
		} else {
			Object.assign(this, this.__defaults);
		}
		return this;
	}
}
