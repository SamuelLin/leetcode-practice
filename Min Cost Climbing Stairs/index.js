// https://leetcode.com/problems/min-cost-climbing-stairs/
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const cache = new Map();

  function steps(index) {
      if (index === 0 || index === 1) return cost[index];
      if (cache.get(index)) return cache.get(index);
      
      const result = (cost[index] || 0) + Math.min(steps(index - 1), steps(index - 2));
      cache.set(index, result);

      return result;
  }
  
  return steps(cost.length);
};
