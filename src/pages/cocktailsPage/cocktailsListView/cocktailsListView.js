import { createCocktailCardView } from "./cocktailCardView.js";

export function createCocktailsListView(cocktails) {
  const container = document.createElement("div");
  container.classList.add("w-full", "p-6");

  // Header showing number of cocktails found
  const header = document.createElement("h2");
  header.classList.add("text-xl", "font-semibold", "mb-4");
  header.textContent = `Found ${cocktails.length} cocktails`;

  // Grid container for cocktail cards
  const grid = document.createElement("div");
  grid.classList.add(
    "grid",
    "grid-cols-1",
    "sm:grid-cols-2",
    "md:grid-cols-3",
    "lg:grid-cols-4",
    "gap-6",
  );

  cocktails.forEach((cocktail) => {
    grid.appendChild(createCocktailCardView(cocktail));
  });

  container.appendChild(header);
  container.appendChild(grid);

  return container;
}
