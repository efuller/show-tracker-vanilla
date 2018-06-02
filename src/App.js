import Events from './js/Events';
import View from './js/View';
import Main from './views/main.hbs';

class App {
	constructor(config, router) {
		const defaultConfig = {
			appEl: '#app',
		};

		const newConfig = Object.assign(defaultConfig, config, {});
		App.config = newConfig;

		Events.on('loading', this.loading);

		const home = new View(Main, {});
		home.render();
		this.router = router;
	}

	loading(message) {
		const el = document.querySelector(App.config.appEl);
		el.innerHTML = message;
	}
}

export default App;
