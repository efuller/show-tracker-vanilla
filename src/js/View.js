class View {
	constructor(selector, template, data) {
		this.selector = selector;
		this.view = template({ data });
	}
	render() {
		const appEl = document.querySelector(this.selector);
		appEl.innerHTML = this.view;
	}
}

export default View;
