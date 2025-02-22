import { isEqual } from "./utils/index.js";
const HISTORY_LIMIT = 49;

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
      if (typeof newState === "function") {
        newState = newState(prevState);
      }

      if (isEqual(newState, state, true)) return; //3rd arg states newState can be just a subset of the state

      state = { ...state, ...newState };

      // Notify only relevant subscribers
      listeners.forEach(({ selector, callback }) => {
        if (hasStateChanged(prevState, state, selector)) {
          callback(selector(state));
        }
      });

      if (history.length > HISTORY_LIMIT) history.shift();
      history.push(state);

      console.log("State History:", history);
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

// Deep compare state by keys
function hasStateChanged(prevState, newState, selector) {
  const selectedPrevState = selector(prevState);
  const selectedNewState = selector(newState);

  if (typeof selectedPrevState !== typeof selectedNewState) return true;

  if (
    (selectedPrevState === null || selectedPrevState === undefined) &&
    (selectedNewState === null || selectedNewState === undefined)
  )
    return false;

  if (
    typeof selectedPrevState !== "object" ||
    typeof selectedNewState !== "object"
  ) {
    return selectedPrevState !== selectedNewState;
  }

  return !isEqual(selectedPrevState, selectedNewState);
}
