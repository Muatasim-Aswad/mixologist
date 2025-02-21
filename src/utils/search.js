import { COCKTAIL_DB_URL } from "../constants.js";
import { fetchData, wait } from "../utils/index.js";
import { setState } from "../app.js";
import { processCocktailData } from "./processCocktailData.js";

export async function search(searchInput, byId = false, updateUrl = true) {
  try {
    setState({ loading: true, currentPage: "loading" });
    //set state url
    await wait(1.5); //to simulate slow search

    searchInput = searchInput.trimStart().toLowerCase();
    let url = searchInput //if no query get a random one
      ? byId
        ? `${COCKTAIL_DB_URL.lookup.cocktailById}${searchInput}`
        : `${COCKTAIL_DB_URL.search.byName}${searchInput}`
      : COCKTAIL_DB_URL.random;

    const cache = searchInput ? true : false; //do not cache random
    const data = await fetchData(url, cache);

    if (!data.drinks || data.drinks.length === 0)
      throw new Error("Empty response");

    const cocktails = data.drinks.map(processCocktailData);

    url = null;
    if (updateUrl) {
      if (byId) {
        url = `/cocktails/${searchInput}`;
      } else if (searchInput) {
        url = `/cocktails?search=${searchInput}`;
      } else {
        url = "/cocktails";
      }

      window.history.pushState({}, "", url);
    }
    const newState = {
      cocktails: cocktails,
      loading: false,
      currentPage: "cocktails",
    };
    setState(newState);
  } catch (error) {
    console.error(error);
    setState({ error: error.message, loading: false, currentPage: "error" });
  }
}
