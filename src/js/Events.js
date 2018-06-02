class Events {
	constructor() {
		this.events = {};
	}
	on(event, cb) {
		if (this.events[event]) {
			this.events[event].push(cb);
		} else {
			this.events[event] = [cb];
		}
	}
	emit(event, data) {
		if (this.events[event]) {
			this.events[event].forEach(cb => cb(data));
		}
	}
	off(event) {
		if (this.events[event]) {
			delete this.events[event];
		}
	}
}

export default new Events();
