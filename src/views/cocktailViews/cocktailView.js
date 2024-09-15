export function createCocktailView(cocktail) {
  const cocktailElement = document.createElement('div');
  cocktailElement.classList.add('cocktail');

  cocktailElement.innerHTML = String.raw`
        <h2>${cocktail.name}</h2>
        <div class="ingredients">
            <h3>Ingredients:</h3><ul></ul>
        </div>
        <div class="glass">
            <h3>Glass:</h3><p>${cocktail.glass}</p>
        </div>
        <div class="instructions">
            <h3>Instructions:</h3><p>${cocktail.instructions}</p>
        </div>               
        <div class="category">
            <h3>Category:</h3><p>${cocktail.category}</p>
        </div>
        <div class="alcoholic">
            <h3>Alcoholic:</h3><p>${cocktail.alcoholic}</p>
        </div>
        <img src="${cocktail.image}" alt="${cocktail.name}" />
  `;

  return cocktailElement;
}
