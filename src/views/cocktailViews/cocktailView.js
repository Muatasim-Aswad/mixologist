export function createCocktailView(cocktail) {
  const cocktailElement = document.createElement('div');
  cocktailElement.classList.add('cocktail');

  cocktailElement.innerHTML = String.raw`
        <h2>${cocktail.name}</h2>
        <div class="tags"> 
          <p>${cocktail.glass}</p>
          <p>${cocktail.alcoholic}</p>
          <p>${cocktail.category}</p>
        </div>
        <div class="ingredients">
            <ul></ul>
        </div>
        <div class="instructions">
            <p>${cocktail.instructions}</p>
        </div>               
        <img src="${cocktail.image}" alt="${cocktail.name}" />
  `;

  return cocktailElement;
}
