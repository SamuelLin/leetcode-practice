// https://leetcode.com/problems/combination-sum-ii/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const result = [];
  candidates.sort((b,a) => b - a);
  
  const helper= (rem, start, current) => {
      if(rem < 0) return;
      if(rem === 0) {
          result.push(current.slice())
          return;
      }
      
      for(let i = start; i < candidates.length; i++){
          if(i > start && candidates[i] === candidates[i - 1]) continue;
          current.push(candidates[i])
          helper(rem - candidates[i], i + 1, current.slice());
          current.pop();
      }
  }
  
  helper(target, 0 , []);
  
  return result;
};
