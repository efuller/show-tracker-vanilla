import Handlebars from "handlebars";
import View from "../View";

test("View.render() should render a template to the appEl", () => {
  const source = '<div id="app"></div>';
  const html = '<div class="test">hi there</div>';
  const template = Handlebars.compile(html);

  document.body.innerHTML = source;
  const view = new View("#app", template, {});
  view.render();

  expect(document.body.querySelector(".test")).not.toBeNull();
});
