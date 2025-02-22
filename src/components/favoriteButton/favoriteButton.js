import {
  hasFavorite,
  addFavorite,
  removeFavorite,
} from "../../models/favorites.js";
import { createFavoriteView } from "./favoriteView.js";

export function createFavoriteButton(cocktail) {
  const isFavorite = hasFavorite(cocktail);
  const button = createFavoriteView(isFavorite);

  // Click handler
  button.addEventListener("click", () => {
    const isFavorite = hasFavorite(cocktail);

    if (isFavorite) {
      removeFavorite(cocktail);
      button.classList.remove("text-red-500");
      button.classList.add("text-gray-500");
    } else {
      addFavorite(cocktail);
      button.classList.remove("text-gray-500");
      button.classList.add("text-red-500");
    }
  });

  return button;
}
