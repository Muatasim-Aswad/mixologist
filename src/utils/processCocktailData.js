export function processCocktailData(raw) {
  const cocktail = {
    processed: true,
    id: raw.idDrink,
    name: raw.strDrink,
    image: raw.strDrinkThumb,
    ingredients: [],
    glass: raw.strGlass,
    instructions: raw.strInstructions.split(".").filter((i) => i) || [], //split and remove empty strings
    category: raw.strCategory,
    alcoholic: raw.strAlcoholic,
  };

  //create an obj for the ingredient and push it to the ingredients array
  let i = 1;
  while (raw[`strIngredient${i}`]) {
    const ingredient = {
      name: raw[`strIngredient${i}`] || "",
      measure: raw[`strMeasure${i}`] || "",
      image: `https://www.thecocktaildb.com/images/ingredients/${raw[`strIngredient${i}`]}-Small.png`,
    };

    cocktail.ingredients.push(ingredient);
    i++;
  }

  return cocktail;
}
