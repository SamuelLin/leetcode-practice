//https://leetcode.com/problems/find-and-replace-pattern/
/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  return words.filter(word => {
      let book = {};
      let patternBook = {}
      
      for (let i = 0; i < word.length; i++) {
          let w = word[i], p = pattern[i];

          if (
              (book[w] && book[w] !== p) || 
              (patternBook[p] && patternBook[p] !== w)
          ) return false

          book[w] = p
          patternBook[p] = w
      }
      
      return true;
  })
};
