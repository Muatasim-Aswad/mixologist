import { createFavoriteButton } from "../sharedViews/favoriteButton.js";

export function createCocktailView(cocktail) {
  const cocktailElement = document.createElement("div");
  cocktailElement.classList.add(
    "cocktail",
    "w-full",
    "max-w-4xl",
    "mx-auto",
    "sm:mb-6",
    "sm:mt-10",
  );

  // Convert instructions array into a list of <li> items
  const instructionList = cocktail.instructions
    .map((instruction) => `<li class="block pl-2 pb-2">- ${instruction}</li>`)
    .join("");

  cocktailElement.innerHTML = String.raw`
    <div class="max-w-full rounded-lg shadow-lg bg-white overflow-hidden">
      <div class="px-2 py-4 sm:p-6">
        <div class="cocktail-header flex flex-col md:flex-row justify-between items-start md:items-center mb-3 px-4 md:px-0">
          <h2 class="text-2xl md:text-3xl font-semibold mb-2 md:mb-0">${cocktail.name}</h2>
          <div class="favorite-button-container"></div> <!-- Placeholder for favorite button -->
        </div>
        
        <div class="tags flex flex-wrap gap-2 mb-4 px-4 md:px-0">
          <span class="bg-blue-500 text-white text-xs md:text-sm font-semibold py-1 px-3 rounded-full">${cocktail.glass}</span>
          <span class="bg-yellow-400 text-white text-xs md:text-sm font-semibold py-1 px-3 rounded-full">${cocktail.alcoholic}</span>
          <span class="bg-green-500 text-white text-xs md:text-sm font-semibold py-1 px-3 rounded-full">${cocktail.category}</span>
        </div>
        
        <div class="ingredients mb-4 px-4 md:px-0">
          <h6 class="text-lg font-semibold">Ingredients:</h6>
          <ul class="flex flex-row flex-wrap">
            <!-- Ingredients will be dynamically added here -->
          </ul>
        </div>

        <div class="instructions mb-4 px-4 md:px-0">
          <h6 class="text-lg font-semibold mb-2">Instructions:</h6>
          <ul class="block list-disc">
            ${instructionList}
          </ul>
        </div>

        <img src="${cocktail.image}" 
          class="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-contain bg-white rounded-lg" 
          alt="${cocktail.name}">
      </div>
    </div>`;

  // Insert the favorite button
  const favoriteButton = createFavoriteButton(cocktail);
  cocktailElement
    .querySelector(".favorite-button-container")
    .appendChild(favoriteButton);

  return cocktailElement;
}
