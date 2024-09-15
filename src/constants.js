export const COCKTAIL_DB_URL = Object.freeze({
  base: 'https://www.thecocktaildb.com/api/json/v1/1/',
  get search() {
    return {
      byName: `${this.base}search.php?s=`,
      byFirstLetter: `${this.base}search.php?f=`,
      byIngredient: `${this.base}search.php?i=`,
    };
  },
  get lookup() {
    return {
      cocktailById: `${this.base}lookup.php?i=`,
      ingredientById: `${this.base}lookup.php?iid=`,
    };
  },
  get random() {
    return `${this.base}random.php`;
  },
  get filter() {
    return {
      byIngredient: `${this.base}filter.php?i=`,
      byAlcoholic: `${this.base}filter.php?a=`,
      byCategory: `${this.base}filter.php?c=`,
      byGlass: `${this.base}filter.php?g=`,
    };
  },
  get list() {
    return {
      categories: `${this.base}list.php?c=list`,
      glasses: `${this.base}list.php?g=list`,
      ingredients: `${this.base}list.php?i=list`,
      alcoholicFilters: `${this.base}list.php?a=list`,
    };
  },
});
