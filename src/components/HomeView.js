import View from "../js/View";
import { getShows } from "../API";
import Results from "../views/partials/results.hbs";
import SearchResults from "./SearchResultsView";

class HomeView extends View {
  bindEvents() {
    const searchForm = document.querySelector(".search__form");
    searchForm.addEventListener("submit", e => {
      e.preventDefault();

      const { value } = searchForm.show;

      if (!value) {
        return;
      }
      this.renderSearchResults(value.trim());
    });
  }
  renderResults(shows) {
    const view = new SearchResults("#search-results", Results, shows);
    view.show();
  }
  getSearchResults(show) {
    return getShows(show).then(res => res.data.results || []);
  }
  renderSearchResults(show) {
    const shows = this.getSearchResults(show);
    shows.then(res => this.renderResults(res));
  }
}

export default HomeView;
