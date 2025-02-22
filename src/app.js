import { createHeaderComponent } from "./components/header/header.js";
import { createStore } from "./store.js";
import { navigateTo } from "./RoutingRendering/navigateTo.js";
import { favorites } from "./models/favorites.js";
import { favoritesSelector } from "./selectors.js";
import { enableRenderer, enableRouter } from "./RoutingRendering/index.js";

const initialState = {
  currentPage: null,
  url: null,
  error: null,
  loading: false,
  cocktail: null,
  cocktails: null,
  favorites: favorites.getLocalStorage(),
};
export const { setState, getState, subscribe } = createStore(initialState);
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
