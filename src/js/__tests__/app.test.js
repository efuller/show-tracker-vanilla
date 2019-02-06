import App from "../../App";
import Router from "../Router";

test("app should be new-able", () => {
  const app = new App();

  expect(typeof app).toBe("object");
  expect(app instanceof App).toBe(true);
});

test("app.config.appEl should be #app if not config is sent in", () => {
  const app = new App();
  const expected = {
    appEl: "#app"
  };

  expect(app.config).toEqual(expected);
});

test("app.config should inherit options that are passed in", () => {
  const expected = {
    appEl: "#testApp",
    newProp: true
  };
  const app = new App(expected);

  expect(app.config).toHaveProperty("newProp");
  expect(app.config).toEqual(expected);
});

test("app.router should equal an instance of the Router class", () => {
  const app = new App();

  expect(app.router instanceof Router).toBe(true);
});

test("expect app.init to throw if no routes were registered", () => {
  const app = new App();

  expect(() => app.init()).toThrowError(/^There are no registered routes.$/);
});

test("If route registered, router.load() should be called", () => {
  const app = new App();
  const loadFn = jest.fn();

  app.router.load = loadFn;
  app.route("#", () => {});
  app.init();

  expect(loadFn).toHaveBeenCalledTimes(1);
});
