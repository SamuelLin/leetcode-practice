// https://leetcode.com/problems/binary-tree-right-side-view/
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  let result = [];
  
  function bfs(node, level) {
      if (node === null) return;
      if (!result[level]) result[level] = node.val;
      if (node.right) bfs(node.right, level + 1);
      if (node.left) bfs(node.left, level + 1);
  }
  
  bfs(root, 0)
  
  return result;
};
