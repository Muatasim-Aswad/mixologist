import { setState } from "./app.js";
import { search } from "./utils/search.js";

export function navigateTo() {
  const path = window.location.pathname;
  const query = window.location.search;

  if (path === "/mixologist" || path === "/") {
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
