import App from '../App';
import Events from './Events';

class View {
	constructor(template, data) {
		this.view = template({ data });
	}
	render() {
		const { appEl } = App.config;
		console.log(appEl);
		Events.emit('loading', 'Loading........');
		setTimeout(() => {
			const el = document.querySelector(appEl);
			el.innerHTML = this.view;
		}, 2000);
	}
}

export default View;
