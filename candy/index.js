// https://leetcode.com/problems/candy/
/**
 * 網路上大神的解答
 * 先對每個人的上家比較，如果大於上家，糖果比上家加一，沒有則給一顆(深度優先)
 * 再回來補正正確數量
 */
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const candies = [];
  const lastIndex = ratings.length - 1;

  var dfs = (currInd) => {
      const currVal = ratings[currInd];
      
      // If we're not dealing with the first element of the array
      if(currInd > 0) {
          // if current is greater than previous
          if(currVal > ratings[currInd - 1]) {
              // set the candy count 1 above the previous child
              candies[currInd] = candies[currInd - 1] + 1;
          } else {
              // increment by 1
              candies[currInd] = (candies[currInd] || 0) + 1;
          }
      } else {
          // if first element; special case
          // compare the first element to the 2nd. This will help us seed the candy counting array
          if (currVal > ratings[currInd + 1]) {
              candies[currInd] = 2;
          } else candies[currInd] = 1;
      }

  
      if(currInd < lastIndex) {
          
          // search forward
          dfs(currInd + 1);
          // ... then back track and recalculate
          
          // If the current child is greater than the next child, make sure we have more candy
          if(currVal > ratings[currInd + 1] && candies[currInd] <= candies[currInd + 1]) {
              candies[currInd] = candies[currInd + 1] + 1;
          }
      }
      
      
  }
  
  dfs(0);
  
  return candies.reduce((acc, curr) => acc + curr, 0);
};
