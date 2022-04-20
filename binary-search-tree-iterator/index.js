// https://leetcode.com/problems/binary-search-tree-iterator/
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
 */
var BSTIterator = function (root) {
  this.root = root;
  this.stack = [];
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  while (this.root) {
    this.stack.push(this.root);
    this.root = this.root.left;
  }

  this.root = this.stack.pop();
  let result = this.root.val;
  this.root = this.root.right;

  return result;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.root || this.stack.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
