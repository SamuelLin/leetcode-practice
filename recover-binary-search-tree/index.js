// https://leetcode.com/problems/recover-binary-search-tree/
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let node1, node2;
  let prev = new TreeNode(-Number.MAX_VALUE);

  function dfs(node) {
    if (node === null) return;

    dfs(node.left);

    if (node.val < prev.val) {
      node2 = node;
      if (!node1) {
        node1 = prev;
      }
    }

    prev = node;

    dfs(node.right);
  }

  dfs(root);

  [node1.val, node2.val] = [node2.val, node1.val];
};
