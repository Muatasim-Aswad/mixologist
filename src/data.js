import { state } from './app.js';

export const apiCache = new Map(); //cache api results to avoid repetitive fetches

//to store the favorites cocktails in the local storage
export const favorites = {
  _favoritesArray: [],

  update() {
    if (state.cocktail.favorite) {
      favorites.set(state.cocktail);
    } else {
      favorites.remove(state.cocktail);
    }
  },

  set(cocktail) {
    if (this.has(cocktail)) return;

    this._favoritesArray.push(cocktail);

    this.setLocalStorage();
  },

  remove(cocktail) {
    this.getLocalStorage();

    this._favoritesArray = this._favoritesArray.filter(
      (favorite) => favorite.id !== cocktail.id,
    );

    this.setLocalStorage();
  },

  has(cocktailID) {
    this.getLocalStorage();

    return this._favoritesArray.some((favorite) => favorite.id === cocktailID);
  },

  getLocalStorage() {
    this._favoritesArray = JSON.parse(localStorage.getItem('favorites')) || [];
    return this._favoritesArray;
  },

  setLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(this._favoritesArray));
  },
};
