// https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
/**
 * @param {string} s
 * @return {number}
 */
/**
 * 先統計所有字元出現的次數
 * 再從大的重複字元往下
 * 重複的字元次數 - 1再去比對
 * 依此類推
 */
var minDeletions = function(s) {
  let chars = {};

  for (let i = 0; i < s.length; i++) {
      let char = s[i];

      if (chars[char]) {
          chars[char] = chars[char] + 1;
      } else {
          chars[char] = 1
      }
  }
  
  let count = {};
  let result = 0;
  
  Object.keys(chars)
      .sort((a, b) => chars[b] - chars[a])
      .forEach((char) => {
          let num = chars[char]

          while (count[num] && num > 0) {
              num --;
              result++;
          }
      
          if (num > 0) {
              count[num] = char
          }
      })
  
  return result
};
