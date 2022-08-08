// https://leetcode.com/problems/longest-increasing-subsequence/
var lengthOfLIS = function(nums) {
  let arr = [nums[0]];
  
  for (let i = 0; i < nums.length; i++) {
      let number = nums[i];
      
      if (number > arr[arr.length - 1]) {
          arr.push(number);
      } else if (number < arr[arr.length - 1]) {
          const index = arr.findIndex(el => number <= el);

          if (index !== -1) {
              arr[index] = number;
          } else {
              arr[arr.length - 1] = number;
          }
      }
  }

  return arr.length;
};
