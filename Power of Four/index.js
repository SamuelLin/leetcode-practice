// https://leetcode.com/problems/power-of-four/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  if (n===1) return true;
  if (n<1) return false;
  
  const helperRecursion = val => {
      if(val === 1) return true;
      if(val < 4) return false;
      
      return helperRecursion(val/4)
  }

  return helperRecursion(n)
};
