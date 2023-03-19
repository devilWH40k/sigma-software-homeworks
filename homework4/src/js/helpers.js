/**
 *
 * @param {Number} start
 * @param {Number} end
 * @returns random Number in [start, end]
 */
export const randInt = function (start, end) {
  return Math.floor(Math.random() * (start - end + 1) + start);
};
