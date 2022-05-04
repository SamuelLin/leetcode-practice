// https://leetcode.com/problems/max-number-of-k-sum-pairs/submissions/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**
 * 解法1
 * 最簡單的暴力解
 * 對每個數字作向後的迴圈
 * 等於加總值的移除陣列
 * 但效能來到最低的 5%, runtime 9754ms...
 */
var maxOperations = function (nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;

    while (j < nums.length) {
      if (nums[i] + nums[j] === k) {
        count++;

        nums.splice(j, 1);
        nums.splice(i, 1);

        i = i - 1;

        break;
      } else {
        j++;
      }
    }
  }

  return count;
};

/**
 * 解法2
 * 對每個數字作遍歷
 * 搜尋 map裡有無 k - num 值
 * 有的話 count + 1,
 * 沒有的話塞進 map
 * 時間來到了 O(n)
 * 效能進步到了 70% up, runtime 139ms
 */
var maxOperations2 = function (nums, k) {
  let map = new Map();

  return nums.reduce((acc, num) => {
    const pair = k - num;
    const pairSum = map.get(pair);

    if (pairSum > 0) {
      map.set(pair, pairSum - 1);
      return acc + 1;
    }

    const numSum = map.get(num) || 0;
    map.set(num, numSum + 1);

    return acc;
  }, 0);
};
