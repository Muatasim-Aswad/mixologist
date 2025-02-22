import { AppError } from "./appError.js";
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

export function isEqual(a, b, isASubsetOfB = false) {
  if (!a || !b || typeof a !== "object" || typeof b !== "object") {
    throw new AppError("Invalid arguments in isEqual");
  }

  //if a is a subset of b, then a should have less or equal keys than b, therefore we can use a as the reference
  //otherwise, we need to merge the keys of a and b
  const keys = isASubsetOfB
    ? Object.keys(a)
    : new Set(Object.keys(a).concat(Object.keys(b)));

  for (const key of keys) {
    // Check keys mutual existence
    if (!(key in a) || !(key in b)) return false;

    // Check values equality for nested objects
    if (
      typeof a[key] === "object" &&
      typeof b[key] === "object" &&
      a[key] &&
      b[key]
    ) {
      if (!isEqual(a[key], b[key], isASubsetOfB)) return false;
    }

    // Check values equality for primitives
    if (a[key] !== b[key]) return false;
  }

  return true;
}
