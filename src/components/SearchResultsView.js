import View from "../js/View";
import { getShowDetails } from "../API";
import ShowDetailsView from "./ShowDetailsView";
import showView from "../views/partials/showDetails.hbs";

class SearchResults extends View {
  bindEvents() {
    const moreDetails = document.querySelectorAll(".more-details");
    moreDetails.forEach(item => {
      item.addEventListener("click", e => {
        e.preventDefault();
        const id = e.target.getAttribute("data-id");
        getShowDetails(id).then(res => {
          const { data: showDetails } = res;
          const view = new ShowDetailsView(
            "#show-details",
            showView,
            showDetails
          );
        });
      });
    });
  }

  show() {
    const el = document.querySelector(this.selector);
    el.style.display = "block";
  }
}

export default SearchResults;
