// https://leetcode.com/problems/number-of-matching-subsequences/
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
  return words.reduce((acc, word) => {
      let index = -1, i = 0;

      while (word[i]) {
          let charIndex = s.indexOf(word[i], index + 1); // 繼續往後找
          if (charIndex === -1) return acc;
          index = charIndex;
          i++;
      }

      return acc + 1;
  }, 0)
};
