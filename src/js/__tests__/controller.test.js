// https://stackoverflow.com/q/47661741

import Controller from '../Controller';
import View from '../View';
const mockRender = jest.fn();
jest.mock('../View', () => {
	return jest.fn().mockImplementation((template) => {
		return { view: template, render: mockRender };
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
	{{> results}}
	{{> showDetails}}
</div>
`;

	Controller.home();

	//console.log(View.mock.results); // important!!

	expect(View.mock.results[0].value.view).toEqual(expectedHomeTmpl);
	expect(View.mock.calls[0][0]).toEqual(expectedHomeTmpl);
	expect(mockRender.mock.calls[0][0]).toEqual('#app');
});
