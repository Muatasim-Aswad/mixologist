import { createCocktailsListView } from "../views/cocktailsListView.js/cocktailsListView.js";
import { setState } from "../app.js";
import { cocktailsSelector } from "../selectors.js";

export function createCocktailsPage() {
  const cocktails = cocktailsSelector();
  const cocktailsPage = createCocktailsListView(cocktails);

  const cocktailsCards = cocktailsPage.querySelectorAll(".cocktail-card");

  cocktailsCards.forEach((card) => {
    card.addEventListener("click", () => {
      const cocktailId = card.dataset.id;
      const cocktail = cocktails.find((cocktail) => cocktail.id === cocktailId);
      setState({ cocktail: cocktail, currentPage: "cocktail" });
    });
  });

  return cocktailsPage;
}
