export function createIngredientView(ingredient) {
  const li = document.createElement('li');

  li.innerHTML = String.raw`
      <img src="${ingredient.image}" alt="${ingredient.name}" />
      <span>${ingredient.name} - ${ingredient.measure}</span>`;

  return li;
}
