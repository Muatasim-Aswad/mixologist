import { setState } from "./app.js";
import { search } from "./utils/search.js";
import { urlSelector } from "./selectors.js";

/**
 * This function is responsible for navigating to the correct page based on the URL.
 * It should not be called directly; it should be triggered when the popstate event is fired.
 */
export function navigateTo() {
  const { pathname: path, search: query, hash } = window.location;
  const url = path + query + hash;
  const searchQuery = new URLSearchParams(query).get("search");
  const secondSegment = path.split("/").filter(Boolean).at(1);

  if (urlSelector() === url) return;

  let navCase;
  if (path === "/mixologist" || path === "/") navCase = "/mixologist";
  else if (searchQuery) navCase = "/cocktails?search=x";
  else if (secondSegment === "random") navCase = "/cocktails/random";
  else if (secondSegment === "favorites") navCase = "/cocktails/favorites";
  else if (secondSegment) navCase = "/cocktails/:id";
  else navCase = "default";

  const navigators = {
    "/mixologist": () =>
      setState({ currentPage: "welcome", url: "mixologist" }),

    "/cocktails?search=x": () => search(searchQuery, false, false),

    "/cocktails/random": () => search("", false, false),

    "/cocktails/favorites": () =>
      setState((prev) => ({
        currentPage: "cocktails",
        url,
        cocktails: [...prev.favorites],
      })),

    "/cocktails/:id": () => search(secondSegment, true, false),

    default: () =>
      setState({
        error: `Sorry! Mixology doesn't have such a page. Make a search, hit random, or navigate to <a href="https://your-mixologist.netlify.app/">your-mixologist.netlify.app</a>.`,
        currentPage: "error",
      }),
  };

  // Execute the corresponding action
  (navigators[navCase] || navigators["default"])();
}
