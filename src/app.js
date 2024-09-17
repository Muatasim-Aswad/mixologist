import { createHeaderComponent } from './components/header.js';
import { pages } from './pages/index.js';

const states = [];
export let state = {
  currentPage: null,
  cocktail: null,
  error: null,
  loading: false,
};

const loadApp = () => {
  document.querySelector('header').appendChild(createHeaderComponent());

  setState({ currentPage: 'welcome' });
};

window.addEventListener('load', loadApp);

/**
 * @param {Partial<state>} newStateChanges - An object containing the state changes to be applied.
 * The currentPage changes automatically if there is an indication of a new page in the changed states.
 * e.g. { loading: true } will set the loading state to true and the currentPage to 'loading'.
 *
 * @example
 * // Example usage:
 * setState({ loading: true });
 *
 * @example
 * // Complete state structure:
 * interface State {
 *   currentPage: 'welcome' | 'cocktail' | 'ingredient' | 'cocktails' | 'error',
 *   searchBarActive: boolean, //default: false
 *   loading: boolean, //default: false
 *   cocktail: {} | null,
 *   ingredient: {} | null,
 *   cocktails: {}[] | null,
 *   error: string | null,
 * };
 *
 */
export function setState(newStateChanges) {
  //auto set currentPage based on the changes
  if (!newStateChanges.currentPage) {
    const { loading, cocktail, error } = newStateChanges;

    newStateChanges.currentPage = cocktail
      ? 'cocktail'
      : error
        ? 'error'
        : loading
          ? 'loading'
          : null;
  }

  //assign the new state
  states[0] = state; //can be push if state history is needed
  state = { ...state, ...newStateChanges };

  //render page if new currentPage is assigned
  if (newStateChanges.currentPage) renderPage();
}

function renderPage() {
  const main = document.querySelector('main');
  main.innerHTML = '';

  const page = pages[state.currentPage]();
  main.appendChild(page);
}
