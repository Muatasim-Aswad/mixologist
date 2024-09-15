import { addHeader } from './components/header.js';
import { pages } from './pages/index.js';

const states = [];
export let state = {
  currentPage: null,
  cocktail: null,
};

const loadApp = () => {
  addHeader();
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
  //auto set currentPage based on the changed
  if (!newStateChanges.currentPage) {
    if (newStateChanges.cocktail) newStateChanges.currentPage = 'cocktail';
  }

  //assign the new state
  states[0] = state; //can be push if state history is needed
  state = { ...state, ...newStateChanges };

  //apply the new state
  render();
}

function render() {
  const oldState = states[states.length - 1];

  if (
    oldState.currentPage !== state.currentPage ||
    oldState.cocktail !== state.cocktail
  ) {
    const main = document.querySelector('main');
    main.innerHTML = '';

    const page = pages[state.currentPage]();
    main.appendChild(page);
  }
}
