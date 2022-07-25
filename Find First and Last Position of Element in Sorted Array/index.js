// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  const l = nums.length;

  if (l === 0) return [-1, -1];
  
  let left = 0, right = l - 1, firstHit = -1;
  
  while (left <= right) {
      let mid = Math.floor((right + left) / 2);
      
      if (nums[mid] === target) {
          firstHit = mid;
          break;
      };
      
      if (nums[mid] > target) {
          right = mid - 1;
      }
      
      if (nums[mid] < target) {
          left = mid + 1;
      }
  }
  
  if (firstHit === -1) return [-1, -1];
  
  left = firstHit;
  right = firstHit;

  while (true) {
      if (nums[left - 1] === target) left--;
      else break;
  }
  
  while (true) {
      if (nums[right + 1] === target) right++;
      else break;
  }
  
  return [left, right];
};
