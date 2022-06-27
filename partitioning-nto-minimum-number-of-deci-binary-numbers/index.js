// https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/
/**
 * @param {string} n
 * @return {number}
 */
/**
 * 思路：就是字串中找最大的數字
 */

var minPartitions = function(n) {
  let result = 0;

  for (let i = 0; i < n.length; i++) {
      let target = n[i]

      if (result > target) {
          continue;
      } else {
          result = target
          if (result === 9) break;
      }
      
  }

  return result
};
