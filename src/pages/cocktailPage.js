import { createCocktailView } from "../views/cocktailView/cocktailView.js";
import { createIngredientView } from "../views/cocktailView/ingredientView.js";
import { cocktailSelector } from "../selectors.js";

export function createCocktailPage() {
  const cocktail = cocktailSelector();
  const cocktailPage = createCocktailView(cocktail);

  // Get the ingredients list and populate it
  const ingredientsList = cocktailPage.querySelector(".ingredients ul");
  cocktail.ingredients.forEach((ingredient) => {
    ingredientsList.appendChild(createIngredientView(ingredient));
  });

  return cocktailPage;
}
