// https://leetcode.com/problems/minimum-absolute-difference-in-bst/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路：先遞迴到最小點並儲存上一截點做比對，取最小
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let min, prev;

  function dfs(node) {
    if (!node) return;

    dfs(node.left);

    min = prev
      ? Math.min(Math.abs(node.val - prev.val), min)
      : Number.POSITIVE_INFINITY;
    prev = node;

    dfs(node.right);
  }

  dfs(root);

  return min;
};
