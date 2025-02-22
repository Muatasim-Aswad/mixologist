import { getState } from "../app.js";

export const currentPageSelector = (state = getState()) => state.currentPage;
export const urlSelector = (state = getState()) => state.url;
export const favoritesSelector = (state = getState()) => state.favorites;
export const cocktailsSelector = (state = getState()) => state.cocktails;
export const cocktailSelector = (state = getState()) => state.cocktail;
export const loadingSelector = (state = getState()) => state.loading;
export const errorSelector = (state = getState()) => state.error;
