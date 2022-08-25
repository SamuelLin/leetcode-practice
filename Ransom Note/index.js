// https://leetcode.com/problems/ransom-note/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const cache = new Map();

  for (let char of ransomNote) {
      const index = magazine.indexOf(char, cache.get(char));

      if (index !== -1) {
          cache.set(char, index + 1)
      } else {
          return false;
      }
  }
  
  return true;
};
