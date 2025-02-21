export function createStore(initialState = {}) {
  let state = initialState;
  let listeners = [];
  let history = [initialState]; // Stores all previous states

  // Deep compare state by keys
  const hasStateChanged = (prevState, newState, selector) => {
    const selectedPrevState = selector(prevState);
    const selectedNewState = selector(newState);

    if (
      typeof selectedPrevState !== "object" ||
      typeof selectedNewState !== "object"
    ) {
      return selectedPrevState !== selectedNewState;
    }

    //null and undefined

    if (selectedPrevState === null || selectedNewState === null) {
      return selectedPrevState !== selectedNewState;
    }

    if (selectedPrevState === undefined || selectedNewState === undefined) {
      return selectedPrevState !== selectedNewState;
    }

    const keys = new Set([
      ...Object.keys(selectedPrevState),
      ...Object.keys(selectedNewState),
    ]);
    for (const key of keys) {
      if (selectedPrevState[key] !== selectedNewState[key]) return true;
    }
    return false;
  };

  return {
    getState() {
      return state;
    },

    setState(newState) {
      console.log("newState", newState);
      const prevState = { ...state };
      state = { ...state, ...newState };

      // Notify only relevant subscribers
      listeners.forEach(({ selector, callback }) => {
        if (hasStateChanged(prevState, state, selector)) {
          callback(selector(state));
        }
      });
      console.log("state", state);
      history.push(state);
    },

    // Subscribe to changes of a specific part of the state
    subscribe(selector, callback) {
      const listener = { selector, callback };
      listeners.push(listener);

      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    },

    // Undo: Move back in history
    // Redo: Move forward in history
    // Get full history (for debugging)
  };
}
