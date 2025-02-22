export function createIngredientView(ingredient) {
  const li = document.createElement("li");

  li.classList.add(
    "flex",
    "flex-col", // Stack name & quantity by default (mobile-first)
    "sm:flex-row", // Align side-by-side on larger screens
    "items-center",
    "gap-2",
    "p-3",
    "ml-2",
    "mb-2",
    "bg-white",
    "shadow-sm",
    "rounded-lg",
    "text-center", // Center text on small screens
    "sm:text-left", // Align text left on larger screens
    "overflow-hidden", // Prevent text overflow
    "w-fit-content", // Make sure the li item fills the available space
  );

  li.innerHTML = String.raw`
    <img src="${ingredient.image}" class="rounded-full" style="width: 40px; height: 40px;" alt="${ingredient.name}">
    <div class="flex flex-col">
      <span class="font-semibold text-ellipsis overflow-hidden whitespace-nowrap">${ingredient.name}</span>
      <span class="text-gray-500 text-ellipsis overflow-hidden whitespace-nowrap">${ingredient.measure}</span>
    </div>
  `;

  return li;
}
