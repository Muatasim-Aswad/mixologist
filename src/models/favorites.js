import { cocktailSelector, favoritesSelector } from "../selectors.js";
import { setState } from "../app.js";

export const hasFavorite = (cocktail) => {
  return favoritesSelector().some((favorite) => favorite.id === cocktail.id);
};

export const addFavorite = (cocktail) => {
  if (hasFavorite(cocktail)) return;

  setState((prev) => {
    return { ...prev, favorites: [...prev.favorites, cocktail] };
  });
};

export const removeFavorite = (cocktail) => {
  setState((prev) => {
    return {
      ...prev,
      favorites: prev.favorites.filter(
        (favorite) => favorite.id !== cocktail.id,
      ),
    };
  });
};

//local store management for favorites
/**
 * ideally do not interact directly with this object's methods
 * the favorites management should be done through the state
 * the state initiates its favorites slice with the getLocalStorage method
 * setLocalStorage method is subscribed to the state/favorites slice for updates
 */
export const favorites = {
  _favoritesArray: [],
  _subscribers: [],

  update() {
    if (cocktailSelector().favorite) {
      favorites.set(cocktailSelector());
    } else {
      favorites.remove(cocktailSelector());
    }

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

  setLocalStorage(favorites) {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  },

  //add a subscriber method
  subscribe(callback) {
    this._subscribers.push(callback);
  },
};
