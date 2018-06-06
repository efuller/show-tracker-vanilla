import Main from '../views/main.hbs';
import Loading from '../views/partials/loading.hbs';
import View from './View';

const Conroller = {
	test: () => {
		const loading = new View(Loading);
		loading.render('#app');
		return new Promise((resolve) => {
			setTimeout(() => {
				const view = new View(Main);
				view.render('#app');
				resolve();
			}, 2000);
		});
	},
};

export default Conroller;
