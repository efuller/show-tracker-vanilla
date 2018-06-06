class View {
	constructor(template, data) {
		this.view = template({ data });
	}
	render(el) {
		const appEl = document.querySelector(el);
		appEl.innerHTML = this.view;
	}
}

export default View;
