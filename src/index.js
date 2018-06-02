import 'minireset.css';
import './scss/index.scss';
import Main from './views/main.hbs';

window.onload = function() {
    const app = document.getElementById('app');
    const el = document.createElement('div');
    el.innerHTML = Main();
    app.appendChild(el);
}