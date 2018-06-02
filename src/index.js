import 'minireset.css';
import './scss/index.scss';
import Events from './js/Events';
import Router from './js/Router';
import App from './App';
import Main from './views/main.hbs';

window.onload = function() {
	// const app = document.getElementById('app');
	// const el = document.createElement('div');
	// el.innerHTML = Main();
	// app.appendChild(el);
	//
	// console.log('getCount', Events.getCount());
	// const myApp = new App();
	// console.log('getCount', Events.getCount());
	const router = new Router();
	const app = new App(router);
}