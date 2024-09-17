import { createCocktailView } from '../views/cocktailViews/cocktailView.js';
import { state } from '../app.js';
import { createIngredientView } from '../views/cocktailViews/ingredientView.js';
import { favorites } from '../data.js';

export function createCocktailPage() {
  const cocktail = state.cocktail;

  const cocktailPage = createCocktailView(cocktail);

  const ingredientsList = cocktailPage.querySelector('.ingredients ul');
  cocktail.ingredients.forEach((ingredient) => {
    ingredientsList.appendChild(createIngredientView(ingredient));
  });

  const favoriteBtn = cocktailPage.querySelector('.favorite-btn');
  if (cocktail.favorite) favoriteBtn.classList.add('favorite');

  favoriteBtn.addEventListener('click', () => {
    favoriteBtn.classList.toggle('favorite');

    state.cocktail.favorite = !state.cocktail.favorite;

    favorites.update();
  });

  return cocktailPage;
}
