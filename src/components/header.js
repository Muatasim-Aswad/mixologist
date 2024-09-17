import { createHeaderView } from '../views/headerView.js';
import { COCKTAIL_DB_URL } from '../constants.js';
import { fetchData, wait } from '../utils/index.js';
import { setState } from '../app.js';
import { favorites } from '../data.js';

export function createHeaderComponent() {
  const header = createHeaderView();

  const searchBar = header.querySelector('#search-bar');
  const searchButton = header.querySelector('#search-button');

  searchButton.addEventListener('click', handleSearch);
  searchBar.addEventListener('keypress', ({ key }) => {
    if (key === 'Enter') handleSearch();
  });

  function handleSearch() {
    const searchInput = searchBar.value;
    search(searchInput);
    searchBar.value = '';
  }

  return header;
}

async function search(searchInput) {
  try {
    setState({ loading: true }); //start
    await wait(2); //to simulate slow search

    searchInput = searchInput.trimStart().toLowerCase();
    const url = searchInput //if no query get a random one
      ? `${COCKTAIL_DB_URL.search.byName}${searchInput}`
      : COCKTAIL_DB_URL.random;

    const cache = searchInput ? true : false; //do not cache random
    const data = await fetchData(url, cache);

    if (!data.drinks || data.drinks.length === 0)
      //check if empty response
      throw new Error('Empty response');

    const cocktail = processCocktailData(data.drinks[0]);

    setState({ cocktail: cocktail, loading: false }); //end and send data to central
  } catch (error) {
    console.error(error);
    setState({ error: error.message });
  }
}

function processCocktailData(raw) {
  const cocktail = {
    processed: true,
    favorite: favorites.has(raw.idDrink),
    id: raw.idDrink,
    name: raw.strDrink,
    image: raw.strDrinkThumb,
    ingredients: [],
    glass: raw.strGlass,
    instructions: raw.strInstructions.split('.').join('.<br>'),
    category: raw.strCategory,
    alcoholic: raw.strAlcoholic,
  };

  //create an obj for the ingredient and push it to the ingredients array
  let i = 1;
  while (raw[`strIngredient${i}`]) {
    const ingredient = {
      name: raw[`strIngredient${i}`] || '',
      measure: raw[`strMeasure${i}`] || '',
      image: `https://www.thecocktaildb.com/images/ingredients/${raw[`strIngredient${i}`]}-Small.png`,
    };

    cocktail.ingredients.push(ingredient);
    i++;
  }

  return cocktail;
}
