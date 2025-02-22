import { createHeaderComponent } from "./components/header/header.js";
import { createStore } from "./State/store.js";
import { navigateTo } from "./RoutingRendering/navigateTo.js";
import { favorites } from "./models/favorites.js";
import { favoritesSelector } from "./State/selectors.js";
import { enableRenderer, enableRouter } from "./RoutingRendering/index.js";
import { sanitizeData } from "./State/middlewares.js";

const initialState = {
  currentPage: null,
  url: null,
  error: null,
  loading: false,
  cocktail: null,
  cocktails: null,
  favorites: favorites.getLocalStorage(),
};
export const { setState, getState, subscribe, addMiddleware } =
  createStore(initialState);

addMiddleware(sanitizeData);
subscribe(favoritesSelector, () =>
  favorites.setLocalStorage(favoritesSelector()),
); //keeps the local storage for favorites in sync with the state

enableRouter();
enableRenderer();

window.addEventListener("load", loadApp);

function loadApp() {
  document.querySelector("header").appendChild(createHeaderComponent());

  if (window.location.pathname === "/")
    window.history.replaceState({}, "", "/mixologist  ");
  navigateTo();
}
