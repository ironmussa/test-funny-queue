/**
 * Keep a number between two bounds.
 * @param {number} value - The number to clamp
 * @param {number} min - The lower bound
 * @param {number} max - The upper bound
 * @returns {number} value, or the nearest bound when it is outside them
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

module.exports = { clamp };
