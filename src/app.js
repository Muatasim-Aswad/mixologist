import { createHeaderComponent } from "./components/header.js";
import { pages } from "./pages/index.js";
import { createStore } from "./store.js";
import { navigateTo } from "./routing.js";
import { favorites } from "./data.js";
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

subscribe(currentPageSelector, renderPage);
subscribe(urlSelector, navigateTo);
subscribe(favoritesSelector, () => favorites.update());

window.addEventListener("load", loadApp);
window.addEventListener("popstate", (e) => {
  e.preventDefault();
  const path = window.location.pathname;
  const query = window.location.search;
  const hash = window.location.hash;

  setState({ url: path + query + hash });
});

function loadApp() {
  document.querySelector("header").appendChild(createHeaderComponent());

  setState({ url: "/mixologist" });
}

function renderPage() {
  const main = document.querySelector("main");
  main.innerHTML = "";

  console.log("getState().currentPage");
  const page = pages[getState().currentPage]();
  main.appendChild(page);
}
