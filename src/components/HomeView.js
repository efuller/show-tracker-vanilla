import View from '../js/View';
import { getShows } from '../API';
import Results from '../views/partials/results.hbs';
import SearchResults from './SearchResultsView';

class HomeView extends View {
	bindEvents() {
		const searchForm = document.querySelector('.search__form');
		searchForm.addEventListener('submit', (e) => {
			e.preventDefault();

			const { value } = searchForm.show;

			if (!value) {
				return;
			}
			this.renderSearchResults(value.trim());
		});
	}
	renderSearchResults(show) {
		getShows(show)
			.then((res) => {
				const shows = res.data.results || [];
				const view = new SearchResults('#search-results', Results, shows);
                view.show();
			})
			.catch(err => console.error(err));
	}
}

export default HomeView;
