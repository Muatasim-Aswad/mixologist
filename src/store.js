export function createStore(initialState = {}) {
  let state = initialState;
  let listeners = [];
  let history = [initialState]; // Stores all previous states

  return {
    getState() {
      return state;
    },

    setState(newState) {
      const prevState = { ...state };
      state = { ...state, ...newState };

      // Notify only relevant subscribers
      listeners.forEach(({ selector, callback }) => {
        if (this.hasStateChanged(prevState, state, selector)) {
          callback(selector(state));
        }
      });

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

    // Deep compare state by keys
    hasStateChanged(prevState, newState, selector) {
      const selectedPrevState = selector(prevState);
      const selectedNewState = selector(newState);

      if (
        typeof selectedPrevState !== "object" ||
        typeof selectedNewState !== "object"
      ) {
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
    },

    // Undo: Move back in history
    // Redo: Move forward in history
    // Get full history (for debugging)
  };
}
