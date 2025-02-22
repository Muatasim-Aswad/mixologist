import { createCocktailView } from "./cocktailView/cocktailView.js";
import { cocktailSelector } from "../../selectors.js";

export function createCocktailPage() {
  const cocktail = cocktailSelector();
  const cocktailPage = createCocktailView(cocktail);

  return cocktailPage;
}
