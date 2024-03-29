// https://leetcode.com/problems/combination-sum-iv/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  return dfsTraversal(nums, target, new Map());
};

const dfsTraversal = (nums, remaining, memo) => {
  let count = 0;

  if (remaining === 0) return 1;
  if (memo.has(remaining)) return memo.get(remaining);

  for (let i = 0; i < nums.length; i++) {
      if (remaining - nums[i] >= 0) {
          count += dfsTraversal(nums, remaining - nums[i], memo);
      }
  }

  memo.set(remaining, count);

  return count;
}
