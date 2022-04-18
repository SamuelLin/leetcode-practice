// https://leetcode.com/problems/increasing-order-search-tree/
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
var increasingBST = function (root) {
  if (!root) return root;

  let list = [];
  let tree = new TreeNode();
  let pointer = tree;

  function dfs(node) {
    if (node.left) dfs(node.left);
    list.push(node.val);
    if (node.right) dfs(node.right);
  }

  dfs(root);

  while (list.length) {
    pointer.val = list.shift();

    if (list.length > 0) {
      pointer.right = new TreeNode();
      pointer = pointer.right;
    }
  }

  return tree;
};
