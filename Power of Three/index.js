// https://leetcode.com/problems/power-of-three/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n === 0) return false;
  if (n === 1) return true;
  
  function div(num) {
      const res = num / 3;
      
      if (Number.isInteger(res) && res > 1) return div(res);
      if (res === 1) return true;
          
      return false;
  }
  
  return div(n)
};
