import { currentPageSelector, urlSelector } from "../selectors.js";
import { renderPage, renderWithoutUrl } from "./renderers.js";
import { reflectUrlState } from "./reflectUrlState.js";
import { navigateTo } from "./navigateTo.js";
import { subscribe } from "../app.js";

export function enableRouter() {
  subscribe(urlSelector, reflectUrlState); //when the URL state changes, reflect it in the URL bar and history
  window.addEventListener("popstate", navigateTo); //when the user navigates back or forward in the history, CAUSES a url state change
}

export function enableRenderer() {
  subscribe(urlSelector, renderPage); //render when the URL state changes
  subscribe(currentPageSelector, renderWithoutUrl(["error", "loading"])); //render for specific current page states that aren't reflected in the URL
}
