import View from '../js/View';
import Controller from './Controller';

class HomeView extends View {
	bindEvents() {
		const searchForm = document.querySelector('.search__form');
		searchForm.addEventListener('submit', (e) => {
			e.preventDefault();

			const { value } = searchForm.show;

			if (!value) {
				return;
			}
			Controller.getSearchResults(value.trim());
		});
	}
}

export default HomeView;
