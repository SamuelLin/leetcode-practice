// https://leetcode.com/problems/kth-smallest-element-in-a-bst

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
 * @param {number} k
 * @return {number}
 */

/**
 * 一開始思路: 改變樹結構變成一個排序array，缺點就是所有節點都會在裡面
 */
// var kthSmallest = function(root, k) {
//   function concat(target) {
//       if (target === null) return [];
//       return concat(target.left).concat([target.val]).concat(concat(target.right));
//   }

//   const arr = concat(root);

//   return arr[k - 1];
// };

/**
 * 改良之後能減少對所有節點遍歷，利用二元搜尋數左邊子孫一定比自己小的特性
 */
var kthSmallest = function (root, k) {
  let sorted = [];

  function concat(node) {
    if (sorted.length != k) {
      if (node.left) concat(node.left);
      sorted.push(node.val);
      if (node.right) concat(node.right);
    }
  }

  concat(root);

  return sorted[k - 1];
};
