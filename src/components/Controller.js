import Main from "../views/main.hbs";
import HomeView from "./HomeView";

export const home = () => {
  const view = new HomeView("#app", Main, {});
  view.bindEvents();
};
