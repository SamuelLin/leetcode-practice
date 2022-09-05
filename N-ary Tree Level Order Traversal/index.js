// https://leetcode.com/problems/n-ary-tree-level-order-traversal/
/**
 * Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const res = [];
  
  function bfs(node, level) {
      if (!node) return;
      if (!res[level]) res[level] = [];
      
      res[level].push(node.val);
      
      for (child of node.children) {
          bfs(child, level + 1);
      }
  }
  
  bfs(root, 0);
  
  return res;
};
