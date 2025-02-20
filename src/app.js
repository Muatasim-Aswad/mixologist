import { createHeaderComponent } from "./components/header.js";
import { createStore } from "./store.js";
import { navigateTo } from "./routing.js";
import { favorites } from "./data.js";

const initialState = {
  currentPage: null,
  url: null,
  error: null,
  loading: false,
  cocktail: null,
  cocktails: null,
  favorites: null,
};
export const { setState, getState, subscribe } = createStore(initialState);

const loadApp = () => {
  document.querySelector("header").appendChild(createHeaderComponent());

  subscribe(currentPageSelector, renderPage);
  subscribe(urlSelector, navigateTo); //sth wrong here

  setState({ favorites: favorites.getLocalStorage() });
  subscribe(favoritesSelector, favorites.update);

  setState({ url: "/mixologist" });
  navigateTo();
};

window.addEventListener("load", loadApp);
window.addEventListener("popstate", setState());
window.addEventListener("DOMContentLoaded", navigateTo);

function currentPageSelector(state) {
  return state.currentPage;
}

function urlSelector(state) {
  return state.url;
}

function favoritesSelector(state) {
  return state.favorites;
}

function renderPage(page) {
  const main = document.querySelector("main");
  main.innerHTML = "";

  main.appendChild(page);
}
