/**
 * Keep a number between two bounds.
 * @param {number} value - The number to clamp
 * @param {number} min - The lower bound
 * @param {number} max - The upper bound
 * @returns {number} value, or the nearest bound when it is outside them
 *
 * Bounds given out of order (min > max) are swapped before clamping, so the
 * pair is always treated as {min, max} regardless of the order passed in.
 */
function clamp(value, min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.min(Math.max(value, min), max);
}

module.exports = { clamp };
