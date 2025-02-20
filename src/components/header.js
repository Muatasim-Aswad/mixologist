import { createHeaderView } from "../views/headerView.js";
import { search } from "../utils/search.js";

export function createHeaderComponent() {
  const header = createHeaderView();

  const searchBar = header.querySelector("#search-bar");
  const searchButton = header.querySelector("#search-button");

  searchBar.addEventListener("input", () => {
    searchButton.textContent = searchBar.value ? "Search" : "Random";
  });

  searchButton.addEventListener("click", handleSearch);
  searchBar.addEventListener("keypress", ({ key }) => {
    if (key === "Enter") handleSearch();
  });

  function handleSearch() {
    const searchInput = searchBar.value;
    search(searchInput);
    searchBar.value = "";
    searchButton.textContent = "Random";
  }

  return header;
}
