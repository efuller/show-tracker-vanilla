import 'minireset.css';
import './scss/index.scss';
import Controller from './js/Controller';
import App from './App';

window.onload = function () {
	const app = new App();
	app.route('#', Controller.home);
	app.init();
};
