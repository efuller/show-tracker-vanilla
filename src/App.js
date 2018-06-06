class App {
	constructor(config, router) {
		const defaultConfig = {
			appEl: '#app',
		};
		this.router = router;
		const newConfig = Object.assign(defaultConfig, config, {});
		this.config = newConfig;
	}

	route(name, cb) {
		this.router.register(name, cb);
	}

	init() {
		this.router.load();
	}
}

export default App;
