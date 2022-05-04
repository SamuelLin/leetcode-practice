// https://leetcode.com/problems/backspace-string-compare/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/**
 * 這題用 stack push pop解或許會更好
 */
var backspaceCompare = function (s, t) {
  return backspace(s) === backspace(t);
};

function backspace(str) {
  const strArr = str.split("");

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "#") {
      if (strArr[i - 1]) {
        strArr.splice(i - 1, 2);
        i = i - 2;
      } else {
        strArr.splice(i, 1);
        i = i - 1;
      }
    }
  }

  return strArr.join("");
}
