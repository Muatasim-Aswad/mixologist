export function createIngredientView(ingredient) {
  const li = document.createElement('li');

  li.innerHTML = String.raw`
      <img src="${ingredient.image}" alt="${ingredient.name}" />
      <p><span>${ingredient.name}</span><span>${ingredient.measure}</span><p>
    `;

  return li;
}
