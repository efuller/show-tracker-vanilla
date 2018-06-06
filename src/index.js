import 'minireset.css';
import './scss/index.scss';
import Controller from './js/Controller';
import Router from './js/Router';
import App from './App';

window.onload = function() {
	const app = new App({}, new Router);
	app.route('#', Controller.test);
	app.init();
};
