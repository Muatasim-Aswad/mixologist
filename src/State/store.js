import { isEqual } from "../utils/index.js";
const HISTORY_LIMIT = 49;

export function createStore(initialState = {}) {
  let state = initialState;
  let listeners = [];
  const middlewares = [];
  const history = [initialState]; // Stores all previous states

  return {
    getState() {
      return state;
    },

    setState(newState) {
      const prevState = { ...state };

      // Apply middlewares
      middlewares.forEach((middleware) => {
        newState = middleware(newState);
      });

      // Allow for functional updates
      if (typeof newState === "function") {
        newState = newState(prevState);
      }

      // avoid unnecessary state updates
      if (isEqual(newState, state, true)) return; //3rd arg states newState can be just a subset of the state

      // Update state
      state = { ...state, ...newState };

      // Notify only relevant subscribers
      listeners.forEach(({ selector, callback }) => {
        if (hasStateChanged(prevState, state, selector)) {
          callback(selector(state));
        }
      });

      // Keep history
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

    // Add middleware
    addMiddleware(middleware) {
      middlewares.push(middleware);
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

  //checks for primitive data types including null and undefined
  if (selectedPrevState === selectedNewState) return false;

  //if still either is null or undefined, then the state has changed since they are not equal based on the previous check
  if (
    selectedPrevState === undefined ||
    selectedNewState === undefined ||
    selectedPrevState === null ||
    selectedNewState === null
  )
    return true;

  if (
    typeof selectedPrevState === "object" &&
    typeof selectedNewState === "object"
  ) {
    return !isEqual(selectedPrevState, selectedNewState);
  }

  return selectedPrevState !== selectedNewState;
}
