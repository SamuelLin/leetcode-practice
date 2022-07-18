// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let best = 0;
  let min = prices[0];
  
  for(let i = 1; i < prices.length; ++i) { 
      if(min > prices[i]) {
          min = prices[i];
      } else if(prices[i] - min > best) {
          best = prices[i] - min;
      }
  }
  
  return best;
};
