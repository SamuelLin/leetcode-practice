// https://leetcode.com/problems/reverse-linked-list-ii/
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
/**
 * 最簡單的就是先存放陣列，再依照順序倒回
 */
var reverseBetween = function(head, left, right) {
  let temp = [];
  let pointer = 1;
  let node = head;
  
  while (right >= pointer) {
      left <= pointer && temp.push(node.val);
      node = node.next;
      pointer += 1;
  }
  
  pointer = 1;
  node = head;
  
  while (right >= pointer) {
      if (left <= pointer) {
          node.val = temp.pop();
      } 
      node = node.next;
      pointer += 1;
  }
  
  return head;
};

/**
 * 大神們的解法
 * 用指針紀錄要倒裝的起點與終點
 * reverse該區間在拼裝回去
 * 速度會快上許多
 */
var reverseBetween2 = function(head, left, right) {
  let current = head, start = head, position = 1;
  
  while(position < left) {
      start = current
      current = current.next;
      position ++;
  }
  
  let reversedList = null,  tail = current;
  
  while(position >= left && position <= right) {
      const next = current.next;
      current.next = reversedList;
      reversedList = current;
      current = next;
      position ++
  }
  start.next = reversedList;
  tail.next = current;
  
  return left > 1 ? head : reversedList
};
