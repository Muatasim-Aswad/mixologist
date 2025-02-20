import { favorites } from "../../data.js";
import { state } from "../../state.js";

export function createFavoriteButton(favorite) {
  const button = document.createElement("button");
  button.classList.add(
    "favorite-btn",
    "text-2xl",
    "md:text-3xl",
    "transition-colors",
    favorite ? "text-red-500" : "text-gray-500", // Initial state
    favorite ? "hover:text-gray-500" : "hover:text-red-500",
  );

  button.innerHTML = String.raw`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  `;

  // Handle favorite button click
  button.addEventListener("click", () => {
    button.classList.toggle("hover:text-red-500");
    button.classList.toggle("hover:text-gray-500");
    button.classList.toggle("text-red-500");
    button.classList.toggle("text-gray-500");

    button.innerHTML = button.innerHTML; // Re-render SVG to update color

    state.cocktail.favorite = !state.cocktail.favorite;
    favorites.update();
  });

  return button;
}
