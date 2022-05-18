// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  let result;

  function dfs(tree) {
    if (tree === null) return;

    if (tree.val === target.val && !result) {
      result = tree;
      return;
    }

    dfs(tree.left);
    dfs(tree.right);
  }

  dfs(cloned);

  return result;
};
