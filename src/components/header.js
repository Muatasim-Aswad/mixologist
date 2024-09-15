import { createHeaderView } from '../views/headerView.js';
import { COCKTAIL_DB_URL } from '../constants.js';
import { fetchData } from '../utils/fetchData.js';
import { setState } from '../app.js';

export function addHeader() {
  const header = createHeaderView();

  header
    .querySelector('#search-button')
    .addEventListener('click', handleSearch);

  header.querySelector('#search-bar').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') handleSearch();
  });

  function handleSearch() {
    const searchBar = header.querySelector('#search-bar');
    const searchInput = searchBar.value;
    search(searchInput);
    searchBar.value = '';
  }

  const headerContainer = document.querySelector('header');
  headerContainer.appendChild(header);
}

async function search(searchInput) {
  try {
    setState({ loading: true });
    await wait(2); //to be removed

    searchInput = searchInput.trimStart().toLowerCase();
    const url = searchInput
      ? `${COCKTAIL_DB_URL.search.byName}${searchInput}`
      : COCKTAIL_DB_URL.random;
    const cache = searchInput ? true : false;
    console.log(url);
    const data = await fetchData(url, cache);
    console.log(data);
    if (!data.drinks || data.drinks.length === 0)
      throw new Error('Empty response');

    setState({ cocktail: data.drinks[0] });
    console.log(data);
    setState({ loading: false });
  } catch (error) {
    console.error(error);
    setState({ error: error.message });
  }
}

function wait(s) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
}
