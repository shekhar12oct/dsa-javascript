//  Given the head of a singly linked list, reverse the list, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};

// Time Complexity - 0(n)
// Space Complexity - 0(1)
