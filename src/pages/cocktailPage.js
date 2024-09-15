import { createCocktailView } from '../views/cocktailViews/cocktailView.js';
import { state } from '../app.js';
import { createIngredientView } from '../views/cocktailViews/ingredientView.js';

export function createCocktailPage() {
  const cocktail = processCocktailData(state.cocktail);

  const cocktailPage = createCocktailView(cocktail);

  const ingredientsList = cocktailPage.querySelector('.ingredients ul');
  cocktail.ingredients.forEach((ingredient) => {
    ingredientsList.appendChild(createIngredientView(ingredient));
  });

  return cocktailPage;
}

function processCocktailData(fetched) {
  const cocktail = {
    id: fetched.idDrink,
    name: fetched.strDrink,
    image: fetched.strDrinkThumb,
    ingredients: [],
    glass: fetched.strGlass,
    instructions: fetched.strInstructions.split('.').join('.<br>'),
    category: fetched.strCategory,
    alcoholic: fetched.strAlcoholic,
  };

  let i = 1;
  while (true) {
    if (fetched[`strIngredient${i}`]) {
      cocktail.ingredients.push({
        name: fetched[`strIngredient${i}`] || '',
        measure: fetched[`strMeasure${i}`] || '',
        image: `https://www.thecocktaildb.com/images/ingredients/${fetched[`strIngredient${i}`]}-Small.png`,
      });

      i++;
    } else {
      break;
    }
  }

  console.log(cocktail);
  return cocktail;
}
