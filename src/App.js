import Router from './js/Router';

class App {
	constructor(config = {}) {
		const defaultConfig = {
			appEl: '#app',
		};

		this.router = new Router();
		this.config = Object.assign( defaultConfig, config, {});
	}

	route(name, cb) {
		this.router.register(name, cb);
	}

	init() {
		const { routes } = this.router;

		// Throw if no routes were registered.
		if (!routes.length) {
			throw new Error('There are no registered routes.');
		}

		this.router.load();
	}
}

export default App;
