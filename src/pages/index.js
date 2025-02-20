import { createCocktailPage as cocktail } from "./cocktailPage.js";
import { createWelcomePage as welcome } from "./welcomePage.js";
import { createErrorPage as error } from "./errorPage.js";
import { createLoadingPage as loading } from "./loadingPage.js";
import { createCocktailsPage as cocktails } from "./cocktailsPage.js";

export const pages = {
  welcome,
  cocktail,
  error,
  loading,
  cocktails,
};
