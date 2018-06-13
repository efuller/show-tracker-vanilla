// https://stackoverflow.com/q/47661741
import { home } from '../Controller';
import HomeView from '../HomeView';
const mockRender = jest.fn();
const mockBindEvents = jest.fn();
jest.mock('../HomeView', () => {
	return jest.fn().mockImplementation((template) => {
		return { view: template, render: mockRender, bindEvents: mockBindEvents };
	});
});

/**
 * @todo Still do not full understand Mocks as well as properly testing this controller.
 *
 * So when I passed in template to the mockImplementation above and then returned it as view, that gave me the
 * template that was passed in. I could also just change template to 'yikes' that that's what the value of
 * view would be.
 */
test('Controller.home() should render loading', () => {
	const expectedHomeTmpl = `<div class="page">
	{{> header}}
	{{> searchForm}}
</div>
`;

	home();

	//console.log(View.mock.results); // important!!

	expect(HomeView.mock.results[0].value.view).toEqual(expectedHomeTmpl);
	expect(HomeView.mock.calls[0][0]).toEqual(expectedHomeTmpl);
	expect(mockRender.mock.calls[0][0]).toEqual('#app');
});

test('Controller.getSearchResults gets and render data', () => {

})
