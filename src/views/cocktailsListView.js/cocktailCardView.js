import { createFavoriteButton } from "../sharedViews/favoriteButton.js";
import { favoritesSelector } from "../../selectors.js";

export function createCocktailCardView(cocktail) {
  const card = document.createElement("div");
  card.dataset.id = cocktail.id;
  card.classList.add(
    "cocktail-card",
    "bg-white",
    "rounded-lg",
    "shadow-md",
    "p-4",
    "flex",
    "flex-col",
    "items-center",
    "gap-2",
    "transition-transform",
    "hover:scale-105",
    "hover:shadow-lg",
    "relative", // Needed for overlay
    "cursor-pointer",
  );

  card.innerHTML = String.raw`
    <img src="${cocktail.image}" class="w-full h-48 object-cover rounded-lg" alt="${cocktail.name}">
    <h3 class="text-lg font-semibold">${cocktail.name}</h3>
    <p class="text-gray-500 text-sm">${cocktail.glass} - ${cocktail.category}</p>
    <div class="favorite-button-container"></div> <!-- Placeholder for favorite button -->

    <!-- Hover overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-10 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
      <span class="text-white text-sm font-medium bg-black bg-opacity-60 px-3 py-1 rounded-lg">
        View Details
      </span>
    </div>
  `;

  // Insert the favorite button
  if (favoritesSelector().some((favorite) => favorite.id === cocktail.id)) {
    cocktail.favorite = true;
  }
  const favoriteButton = createFavoriteButton(cocktail.favorite);
  favoriteButton.classList.add("relative", "z-20"); // Ensure it's above the overlay
  card.querySelector(".favorite-button-container").appendChild(favoriteButton);

  // Prevent card click when clicking the favorite button
  favoriteButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Stops the card click from firing
  });

  return card;
}
