// https://leetcode.com/problems/longest-consecutive-sequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0;
  
  let max = 1, count = 1;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i - 1] + 1) {
          count++;
          max = Math.max(max, count);
      } else if (nums[i] === nums[i - 1]) {
          continue;
      } else {
          count = 1;
      }
  }

  return max
};
