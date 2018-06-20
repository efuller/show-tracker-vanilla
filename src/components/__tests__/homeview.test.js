import HomeView from '../HomeView';
import View from "../../js/View";
import Handlebars from "handlebars";

test('bindEvents() should bind event to search btn', () => {
	const source = '<div id="app"></div>';
	const html = `<div class="test">
		<form name="search" class="search__form">
			<label class="search__label"><span class="screen-reader-text">Search</span></label>
			<input type="text" name="show" placeholder="Search a show">
			<button type="submit">Search</button>
		</form>
	</div>`;
	const template = Handlebars.compile(html);

	document.body.innerHTML = source;
	const view = new HomeView('#app', template, {});
	view.renderSearchResults = jest.fn(() => Promise.resolve());
	view.render();

	const searchForm = document.querySelector('.search__form');
	searchForm.show = {};
	searchForm.show.value = 'homeland';

	// Simulate event.
	var evt = document.createEvent('HTMLEvents');
	evt.initEvent('submit', false, true);
	searchForm.dispatchEvent(evt);

	console.log(view.renderSearchResults.mock.calls[0][0]);

	expect(view.renderSearchResults).toHaveBeenCalledTimes(1);
	expect(view.renderSearchResults).toHaveBeenCalledWith('homeland');
	expect(document.body.querySelector('.test')).not.toBeNull();
})