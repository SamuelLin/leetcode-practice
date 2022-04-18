// https://leetcode.com/problems/convert-bst-to-greater-tree
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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let sum = 0;

  function dfs(node) {
    if (node.right) {
      node.right = dfs(node.right);
    }

    sum += node.val;
    node.val = sum;

    if (node.left) {
      node.left = dfs(node.left);
    }

    return node;
  }

  return root ? dfs(root) : root;
};
