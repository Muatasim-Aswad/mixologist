import { createHeaderComponent } from "./components/header.js";
import { pages } from "./pages/index.js";
import { createStore } from "./store.js";
import { navigateTo } from "./routing.js";
import { favorites } from "./models/favorites.js";
import {
  currentPageSelector,
  urlSelector,
  favoritesSelector,
} from "./selectors.js";

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

subscribe(currentPageSelector, renderPage); //render the page when the currentPage changes
subscribe(favoritesSelector, () =>
  favorites.setLocalStorage(favoritesSelector()),
);
subscribe(urlSelector, reflectUrlState);

window.addEventListener("popstate", navigateTo);
window.addEventListener("load", loadApp);

function loadApp() {
  document.querySelector("header").appendChild(createHeaderComponent());

  if (window.location.pathname === "/")
    window.history.replaceState({}, "", "/mixologist  ");
  navigateTo();
}

function renderPage() {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const page = pages[getState().currentPage]();
  main.appendChild(page);
}

function reflectUrlState() {
  const url = urlSelector();
  const { pathname: path, search: query, hash } = window.location;

  if (url === path + query + hash) return;

  window.history.pushState({}, "", url);
}
