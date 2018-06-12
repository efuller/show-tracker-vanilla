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
	Controller.home();
	expect(mockRender.mock.calls[0][0]).toEqual('#app');
});
