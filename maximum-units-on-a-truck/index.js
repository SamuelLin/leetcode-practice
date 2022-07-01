// https://leetcode.com/problems/maximum-units-on-a-truck/
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1])
  
  let result = 0;

  for (let i = 0; i < boxTypes.length; i++) {
      const nums = Math.min(boxTypes[i][0], truckSize)
      result += nums * boxTypes[i][1];
      truckSize -= nums;
  }
  
  return result
};
