import View from "../js/View";

class ShowDetailsView extends View {
  bindEvents() {
    const el = document.querySelector(this.selector);
    el.style.display = "block";

    const closeBtn = document.querySelector(".show__close");
    closeBtn.addEventListener("click", e => {
      e.preventDefault();
      el.style.display = "none";
    });
  }
}

export default ShowDetailsView;
