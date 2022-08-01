// https://leetcode.com/problems/unique-paths/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
let cache = new Map();

var uniquePaths = function(m, n) {
  if (m < 1 || n < 1) return 0;
  if (m === 1 || n === 1) return 1;
  if (cache.get(`${m}-${n}`)) return cache.get(`${m}-${n}`);
  
  const result = uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
  cache.set(`${m}-${n}`, result);
  
  return result;
};
