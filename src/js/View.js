class View {
  constructor(selector, template, data) {
    this.selector = selector;
    this.view = template({ data });
    this.render();
  }
  render() {
    const appEl = document.querySelector(this.selector);
    appEl.innerHTML = this.view;
    this.bindEvents();
  }
  bindEvents() {}
}

export default View;
