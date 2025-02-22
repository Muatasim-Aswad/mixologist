import { urlSelector } from "../selectors.js";

export function reflectUrlState() {
  const url = urlSelector();
  const { pathname: path, search: query, hash } = window.location;

  if (url === path + query + hash) return;

  window.history.pushState({}, "", url);
}
