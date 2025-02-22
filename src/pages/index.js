import { createMixologistPage as mixologist } from "./mixologistPage/mixologistPage.js";
import { createCocktailsPage as cocktails } from "./cocktailsPage/cocktailsPage.js";
import { createCocktailPage as cocktail } from "./cocktailPage/cocktailPage.js";
import { createLoadingPage as loading } from "./loadingPage/loadingPage.js";
import { createErrorPage as error } from "./errorPage/errorPage.js";

export const pages = {
  mixologist,
  cocktails,
  cocktail,
  loading,
  error,
};
