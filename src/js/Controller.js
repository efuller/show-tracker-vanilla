import Main from '../views/main.hbs';
import View from './View';

const Controller = {
	home: () => {
		const view = new View(Main);
		view.render('#app');
	},
};

export default Controller;
