// https://leetcode.com/problems/binary-tree-pruning/
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
var pruneTree = function(root) {
  function dfs(node) {
      if (!node) return
      if (!node.left && !node.right) return node.val !== 0
      
      let l = true, r = true;
      
      if (!dfs(node.left)) {
          node.left = null; 
          l = false;
      }
      if (!dfs(node.right)) {
          node.right = null; 
          r = false;
      } 
  
      return node.val === 1 || (l || r)
  }
  
  if (!dfs(root)) root = null

  return root
};

// 簡潔的寫法
var pruneTree2 = function(root) {
  root.right = root.right && pruneTree(root.right);
  root.left = root.left && pruneTree(root.left);
  if(root.val === 0 && !root.right && !root.left)
    return null
  else
    return root;
};
