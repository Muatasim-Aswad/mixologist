import { createCocktailsListView } from "./cocktailsListView/cocktailsListView.js";
import { setState } from "../../app.js";
import { cocktailsSelector } from "../../selectors.js";

export function createCocktailsPage() {
  const cocktails = cocktailsSelector();
  const cocktailsPage = createCocktailsListView(cocktails);

  const cocktailsCards = cocktailsPage.querySelectorAll(".cocktail-card");

  //move to cocktail page when a cocktail card is clicked
  cocktailsCards.forEach((card) => {
    card.addEventListener("click", () => {
      const cocktailId = card.dataset.id;
      const cocktail = cocktails.find((cocktail) => cocktail.id === cocktailId);
      setState({
        cocktail: cocktail,
        currentPage: "cocktail",
        url: `/cocktails/${cocktailId}`,
      });
    });
  });

  return cocktailsPage;
}
