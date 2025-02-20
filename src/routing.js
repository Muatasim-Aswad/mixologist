import { setState } from "./state.js";
import { search } from "./utils/search.js";

export function navigateTo() {
  const path = window.location.pathname;
  const query = window.location.search;
  const hash = window.location.hash;

  setState({ url: path + query + hash });

  if (path === "/mixologist" || path === "/") {
    //load the welcome page
    setState({ currentPage: "welcome" });
  } else if (path.includes("/cocktails")) {
    const id = path.split("/")[2];
    if (id) {
      //load the cocktail page
      search(id, true, false);
    } else {
      //load the cocktails page
      const searchInput = query?.split("=")[1];
      search(searchInput, false, false);
    }
  }
}
