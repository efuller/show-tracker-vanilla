import View from '../js/View';
import { getSearchResults } from './Controller';

class HomeView extends View {
	bindEvents() {
		const searchForm = document.querySelector('.search__form');
		searchForm.addEventListener('submit', (e) => {
			e.preventDefault();

			const { value } = searchForm.show;

			if (!value) {
				return;
			}
			getSearchResults(value.trim());
		});
	}
}

export default HomeView;
