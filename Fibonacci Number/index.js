// https://leetcode.com/problems/fibonacci-number/
/**
 * @param {number} n
 * @return {number}
 */
const cache = new Map();

var fib = function(n) {
  if (cache.get(n)) return cache.get(n)
  let value = n < 2 ? n : fib(n - 1) + fib(n - 2);
  cache.set(n, value)
  return value
};

// 最簡寫法
var fib2 = function(n) {
  if (n < 2) return n;
  return fib2(n - 1) + fib2(n - 2);
};
