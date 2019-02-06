import HomeView from "../HomeView";
import View from "../../js/View";
import Handlebars from "handlebars";
import SearchResults from "../SearchResultsView";

jest.mock("../SearchResultsView");

beforeEach(() => {
  SearchResults.mockClear();
});

test("bindEvents() should bind event to search btn", () => {
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
  const view = new HomeView("#app", template, {});
  view.renderSearchResults = jest.fn(() => Promise.resolve());
  view.render();

  const searchForm = document.querySelector(".search__form");
  searchForm.show = {};
  searchForm.show.value = "homeland";

  // Simulate event.
  const evt = document.createEvent("HTMLEvents");
  evt.initEvent("submit", false, true);
  searchForm.dispatchEvent(evt);

  // console.log(view.renderSearchResults.mock.calls[0][0]);

  expect(view.renderSearchResults).toHaveBeenCalledTimes(1);
  expect(view.renderSearchResults).toHaveBeenCalledWith("homeland");
  expect(document.body.querySelector(".test")).not.toBeNull();
});

test("bindEvents() should return when there is no value", () => {
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
  const view = new HomeView("#app", template, {});
  view.renderSearchResults = jest.fn(() => Promise.resolve());
  view.render();

  const searchForm = document.querySelector(".search__form");
  searchForm.show = {};
  searchForm.show.value = "";

  // Simulate event.
  const evt = document.createEvent("HTMLEvents");
  evt.initEvent("submit", false, true);
  searchForm.dispatchEvent(evt);

  // console.log(view.renderSearchResults.mock.calls[0][0]);

  expect(view.renderSearchResults).toHaveBeenCalledTimes(0);
});
test("renderResults() should fire up a new Search Results view", () => {
  const shows = {
    original_name: "Homeland",
    id: 1407,
    name: "Homeland",
    vote_count: 874,
    vote_average: 7.37,
    poster_path: "/lT8o38ubu9uzcjZbkDtwsVizDeQ.jpg",
    first_air_date: "2011-10-02",
    popularity: 37.197561,
    genre_ids: [18],
    original_language: "en",
    backdrop_path: "/hTxfw4af6EizpLM7tHKtoSlbdnu.jpg",
    overview:
      "CIA officer Carrie Mathison is tops in her field despite being bipolar, which makes her volatile and unpredictable. With the help of her long-time mentor Saul Berenson, Carrie fearlessly risks everything, including her personal well-being and even sanity, at every turn.",
    origin_country: ["US"]
  };

  expect(SearchResults).not.toHaveBeenCalled();

  const appMarkup = `<div class="test">
		<form name="search" class="search__form">
			<label class="search__label"><span class="screen-reader-text">Search</span></label>
			<input type="text" name="show" placeholder="Search a show">
			<button type="submit">Search</button>
		</form>
	</div>`;
  const template = Handlebars.compile(appMarkup);
  const homeView = new HomeView("#app", template, {});
  homeView.renderResults(shows);

  expect(SearchResults).toHaveBeenCalledTimes(1);
  expect(SearchResults.mock.instances[0].show).toHaveBeenCalledTimes(1);
  expect(SearchResults.mock.calls[0][0]).toEqual("#search-results");
});

test("getSearchResults(show) should call getShows", () => {
  const appMarkup = `<div class="test">
		<form name="search" class="search__form">
			<label class="search__label"><span class="screen-reader-text">Search</span></label>
			<input type="text" name="show" placeholder="Search a show">
			<button type="submit">Search</button>
		</form>
	</div>`;
  const template = Handlebars.compile(appMarkup);
  const homeView = new HomeView("#app", template, {});
  console.log(homeView);
});
