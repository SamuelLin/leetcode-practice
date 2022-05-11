// https://leetcode.com/problems/count-sorted-vowel-strings/submissions/
/**
 * @param {number} n
 * @return {number}
 */

/**
 * 第一次 commit
 * 單純針對陣列去新增字串, 效能差到爆
 */
var countVowelStrings = function (n) {
  let result = [""];

  function addLetter(num) {
    let temp = [];

    for (let i = 0; i < result.length; i++) {
      const lastLetter = result[i].charAt(result[i].length - 1);
      let count = counts[lastLetter] || 0;

      for (let j = count; j < 5; j++) {
        temp.push(result[i] + letters[j]);
      }
    }

    result = temp;
    num - 1 > 0 && addLetter(num - 1);
  }

  addLetter(n);

  return result.length;
};

var letters = ["a", "e", "i", "o", "u"];
var counts = { a: 0, e: 1, i: 2, o: 3, u: 4 };

/**
 * 大神們的詳解
 * 其實並不用操作所謂的字串陣列
 * 只要針對字典順序去for迴圈計數就可以了
 * 越大的計數越少
 */
var countVowelStrings2 = function (n) {
  let res = 0;

  helper(n, 0);

  function helper(n, startIdx) {
    // base case
    if (n === 0) {
      res++;
      return;
    }

    // recursive case
    for (let i = startIdx; i < 5; i++) {
      helper(n - 1, i);
    }
  }

  return res;
};
