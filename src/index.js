import 'minireset.css';
import './scss/index.scss';
import { home } from './components/Controller';
import App from './App';

window.onload = function () {
	const app = new App();
	app.route('#', home);
	app.init();
};
