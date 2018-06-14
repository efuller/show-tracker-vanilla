import 'minireset.css';
import './scss/index.scss';
import Main from './views/main.hbs';
import App from './App';
import HomeView from './components/HomeView';

window.onload = function () {
	const app = new App();
	const view = new HomeView('#app', Main, {});
	app.route('#', view);
	app.init();
};
