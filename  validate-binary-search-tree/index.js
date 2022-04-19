// https://leetcode.com/problems/validate-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let result = true;
  let prev = new TreeNode(-Number.MAX_VALUE);

  function dfs(node) {
    if (node === null) return;

    dfs(node.left);

    if (node.val <= prev.val) {
      result = false;
    }

    prev = node;

    dfs(node.right);
  }

  dfs(root);

  return result;
};
