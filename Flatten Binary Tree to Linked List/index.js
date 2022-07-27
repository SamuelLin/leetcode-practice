// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
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
var flatten = function(root) {
  if (!root) return root;
  
  let current = root;

  while (current !== null) {
      if (current.left) {
          let last = current.left;
          while (last.right !== null) last = last.right;
          
          let tmp = current.right;
          current.right = current.left
          last.right = tmp;
          current.left = null;
      }
      
      current = current.right
  }

  return root;
};
