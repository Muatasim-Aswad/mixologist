export const sanitizeData = (state) => {
  if (state.cocktail || state.cocktails) {
    if (!state.cocktail) state.cocktail = null;
    if (!state.cocktails) state.cocktails = null;
  }

  if (["mixologist", "error", "loading"].includes(state.currentPage)) {
    state.cocktail = null;
    state.cocktails = null;
  }

  return state;
};
