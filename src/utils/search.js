import { COCKTAIL_DB_URL } from "../constants.js";
import { fetchData, wait } from "../utils/index.js";
import { setState } from "../state.js";
import { processCocktailData } from "./processCocktailData.js";

export async function search(searchInput, byId = false, updateUrl = true) {
  try {
    setState({ loading: true }); //start
    //set state url
    if (updateUrl) {
      const url = byId
        ? `/cocktails/${searchInput}`
        : searchInput
          ? `/cocktails?search=${searchInput}`
          : "/cocktails";
      setState({ url: url });
    }
    await wait(1.5); //to simulate slow search

    searchInput = searchInput.trimStart().toLowerCase();
    const url = searchInput //if no query get a random one
      ? byId
        ? `${COCKTAIL_DB_URL.lookup.cocktailById}${searchInput}`
        : `${COCKTAIL_DB_URL.search.byName}${searchInput}`
      : COCKTAIL_DB_URL.random;

    const cache = searchInput ? true : false; //do not cache random
    const data = await fetchData(url, cache);

    if (!data.drinks || data.drinks.length === 0)
      //check if empty response
      throw new Error("Empty response");

    const cocktails = data.drinks.map(processCocktailData);

    setState({ cocktails: cocktails, loading: false }); //send data to central
  } catch (error) {
    console.error(error);
    setState({ error: error.message });
  }
}
