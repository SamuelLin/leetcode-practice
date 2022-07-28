// https://leetcode.com/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const book = {};

  for (let i = 0; i < s.length; i++) {
      const char = s[i];
      book[char] = book[char] ? book[char] + 1 : 1;
  }

  for (let j = 0; j < t.length; j++) {
      const char = t[j];
      if (!book[char]) return false
      book[char] = book[char] - 1;
  }
  
  return true;
};
