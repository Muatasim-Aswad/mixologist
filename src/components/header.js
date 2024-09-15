import { createHeaderView } from '../views/headerView.js';
import { COCKTAIL_DB_URL } from '../constants.js';
import { fetchData } from '../utils/fetchData.js';
import { setState } from '../app.js';

export function addHeader() {
  const header = createHeaderView();

  header.querySelector('#search-button').addEventListener('click', () => {
    const searchBar = header.querySelector('#search-bar');
    const searchInput = searchBar.value;
    if (searchInput) search(searchInput);
    searchBar.value = '';
  });

  const headerContainer = document.querySelector('header');
  headerContainer.appendChild(header);
}

async function search(searchInput) {
  try {
    setState({ loading: true });
    await wait(5); //to be removed

    searchInput = searchInput.trimStart().toLowerCase();
    const url = `${COCKTAIL_DB_URL.search.byName}${searchInput}`;
    const data = await fetchData(url);

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
