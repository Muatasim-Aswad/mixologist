/**
 * Compares two objects using keys and values.
 * Operates in two modes:
 * 1. default: a and b should have the same properties.
 * 2. a should be a subset of b.
 * In both cases, the values of the properties should be the same.
 * @param {Object} a - The first object to compare.
 * @param {Object} b - The second object to compare.
 * @param {boolean} isASubsetOfB - Determines the mode of comparison.
 * @returns {boolean} - Returns true if the objects are equal, false otherwise.
 */

export default function isEqual(a, b, isASubsetOfB = false) {
  // Return false if either a or b is falsy or not an object
  if (!a || !b || typeof a !== "object" || typeof b !== "object") return false;

  //if a is a subset of b, then a should have less or equal keys than b, therefore we can use a as the reference
  //otherwise, we need to merge the keys of a and b
  const keys = isASubsetOfB
    ? Object.keys(a)
    : new Set(Object.keys(a).concat(Object.keys(b)));

  for (const key of keys) {
    // Check keys mutual existence
    if (!(key in a) || !(key in b)) return false;

    // Check values equality for nested objects
    if (typeof a[key] === "object" || typeof b[key] === "object") {
      if (!isEqual(a[key], b[key], isASubsetOfB)) return false;
    }

    // Check values equality for primitives
    if (a[key] !== b[key]) return false;
  }

  return true;
}
