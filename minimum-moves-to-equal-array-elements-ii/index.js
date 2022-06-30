// https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  nums.sort((a, b) => a - b)
  let ans = 0, median = nums[nums.length >> 1] // 右移一位相當除2的一次方取最大小於整數 by 網路神人
  for (let i = 0; i < nums.length; i++) ans += Math.abs(median - nums[i])
  return ans
};
