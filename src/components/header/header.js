import { createHeaderView } from "./headerView.js";
import { search } from "../../utils/index.js";
import { setState } from "../../app.js";
import { favoritesSelector } from "../../selectors.js";
import { subscribe } from "../../app.js";

export function createHeaderComponent() {
  const header = createHeaderView();

  const logo = header.querySelector("#mixologist-logo");
  const favoritesIcon = header.querySelector("#favorites-icon");
  const searchBar = header.querySelector("#search-bar");
  const searchButton = header.querySelector("#search-button");

  logo.addEventListener("click", () => {
    setState({
      currentPage: "mixologist",
      url: "/mixologist",
    });
  });

  // Update favorites when clicked
  favoritesIcon.addEventListener("click", () => {
    setState((prev) => {
      return {
        currentPage: "cocktails",
        url: "/cocktails/favorites",
        cocktails: prev.favorites,
      };
    });
  });

  searchBar.addEventListener("input", () => {
    searchButton.textContent = searchBar.value ? "Search" : "Random";
  });

  searchButton.addEventListener("click", handleSearch);
  searchBar.addEventListener("keypress", ({ key }) => {
    if (key === "Enter") handleSearch();
  });

  async function handleSearch() {
    const searchInput = searchBar.value;
    await search(searchInput);
    searchBar.value = "";
    searchButton.textContent = "Random";
  }

  // Update favorites icon when favorites change
  subscribe(favoritesSelector, updateFavoritesIcon);

  function updateFavoritesIcon() {
    const icon = header.querySelector("#favorites-icon svg");
    const count = header.querySelector("#favorites-count");
    const favCount = favoritesSelector().length;

    if (favCount > 0) {
      icon.classList.replace("text-gray-500", "text-red-500");
      count.textContent = favCount;
      count.classList.remove("hidden");
    } else {
      icon.classList.replace("text-red-500", "text-gray-500");
      count.classList.add("hidden");
    }
  }

  return header;
}
