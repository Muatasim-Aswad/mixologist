import { createCocktailsListView } from "../views/cocktailsListView.js/cocktailsListView.js";
import { state, setState } from "../state.js";

export function createCocktailsPage() {
  const cocktails = state.cocktails;
  const cocktailsPage = createCocktailsListView(cocktails);

  const cocktailsCards = cocktailsPage.querySelectorAll(".cocktail-card");

  cocktailsCards.forEach((card) => {
    card.addEventListener("click", () => {
      const cocktailId = card.dataset.id;
      const cocktail = cocktails.find((cocktail) => cocktail.id === cocktailId);
      setState({ cocktail: cocktail, url: `/cocktails/${cocktailId}` });
    });
  });

  return cocktailsPage;
}
