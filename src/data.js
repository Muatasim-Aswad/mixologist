import { cocktailSelector } from "./selectors.js";

export const apiCache = new Map(); //cache api results to avoid repetitive fetches

//to store the favorites cocktails in the local storage
export const favorites = {
  _favoritesArray: [],
  _subscribers: [],

  update() {
    console.log(cocktailSelector().favorite);
    if (cocktailSelector().favorite) {
      favorites.set(cocktailSelector());
      console.log("favorites.set");
    } else {
      favorites.remove(cocktailSelector());
    }

    console.log("favorites.update", this._favoritesArray);
    console.log("cocktailSelector()", cocktailSelector());
    console.log("localStorage", this.getLocalStorage());

    this._subscribers.forEach((callback) => callback());
  },

  set(cocktail) {
    if (this.has(cocktail)) return;
    this._favoritesArray.push(cocktail); // Add the cocktail to the array
    this.setLocalStorage();
  },

  remove(cocktail) {
    this.getLocalStorage();

    this._favoritesArray = this._favoritesArray.filter(
      (favorite) => favorite.id !== cocktail.id,
    );

    this.setLocalStorage();
  },

  has(cocktail) {
    this.getLocalStorage();

    return this._favoritesArray.some((favorite) => favorite.id === cocktail.id);
  },

  getLocalStorage() {
    this._favoritesArray = JSON.parse(localStorage.getItem("favorites")) || [];
    return this._favoritesArray;
  },

  setLocalStorage() {
    localStorage.setItem("favorites", JSON.stringify(this._favoritesArray));
  },

  //add a subscriber method
  subscribe(callback) {
    this._subscribers.push(callback);
  },
};
