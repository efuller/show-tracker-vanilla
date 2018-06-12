import handlebars from 'handlebars';
import Controller from '../Controller';
import View from '../View';
const mockRender = jest.fn();
jest.mock('../View', () => {
	return jest.fn().mockImplementation(() => {
		return { render: mockRender };
	});
});

/**
 * @todo Still do not full understand Mocks as well as properly testing this controller.
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

	expect(View.mock.calls[0][0]).toEqual(expectedHomeTmpl);
	expect(mockRender.mock.calls[0][0]).toEqual('#app');
});
