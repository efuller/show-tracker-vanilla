import Handlebars from 'handlebars';
import View from '../View';

test('something', () => {
	const source = '<div id="app"></div>';
	const html = '<div class="test">hi there</div>';
	const template = Handlebars.compile(html);

	document.body.innerHTML = source;
	const view = new View(template, {});
	view.render('#app');

	expect(document.body.querySelector('.test')).not.toBeNull();
});