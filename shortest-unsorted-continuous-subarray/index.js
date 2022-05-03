// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let l = 0,
    r = nums.length - 1,
    nd = -1,
    st = 0;
  let min = Infinity,
    max = -Infinity;

  while (r >= 0) {
    nums[l] >= max ? (max = nums[l]) : (nd = l);
    nums[r] <= min ? (min = nums[r]) : (st = r);
    l++;
    r--;
  }

  return nd - st + 1;
};
