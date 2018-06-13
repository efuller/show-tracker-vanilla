import Main from '../views/main.hbs';
import Results from '../views/partials/results.hbs';
import { getShows } from '../API';
import HomeView from './HomeView';
import SearchResults from './SearchResultsView';

const Controller = {
	home: () => {
		const view = new HomeView(Main, {});
		view.render('#app');
		view.bindEvents();
	},
	getSearchResults: (show) => {
		getShows(show)
			.then((res) => {
				const shows = res.data.results || [];
				console.log(shows);
				const view = new SearchResults(Results, shows);
				view.render('#search-results');
			});
	},
};

export default Controller;
