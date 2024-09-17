export function createCocktailView(cocktail) {
  const cocktailElement = document.createElement('div');
  cocktailElement.classList.add('cocktail');

  cocktailElement.innerHTML = String.raw`
        <div class = "cocktail-header">
          <h2>${cocktail.name}</h2>
          <button class="favorite-btn" title= 'Add to favorites'>❤</button>
        </div>
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
