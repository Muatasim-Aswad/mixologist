import { createHeaderView } from '../views/headerView.js';
import { COCKTAIL_DB_URL } from '../constants.js';
import { fetchData } from '../utils/fetchData.js';
import { setState } from '../app.js';

export function addHeader() {
  const header = createHeaderView();

  header.querySelector('#search-button').addEventListener('click', () => {
    const searchInput = header.querySelector('#search-bar').value;
    if (searchInput) search(searchInput);
  });

  const headerContainer = document.querySelector('header');
  headerContainer.appendChild(header);
}

async function search(searchInput) {
  searchInput = searchInput.trimStart().toLowerCase();
  const url = `${COCKTAIL_DB_URL.search.byName}${searchInput}`;

  const data = await fetchData(url);
  setState({ cocktail: data.drinks[0] });
  console.log(data);
}
