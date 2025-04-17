// Check if the linked list is a palindrome

const isPalindrome = (head) => {
    if (!head || !head.next) return true;

    let slow = head, fast = head;
  
    // Find middle
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // Reverse second half
    let prev = null;
    while (slow) {
      let next = slow.next;
      slow.next = prev;
      prev = slow;
      slow = next;
    }
  
    // Compare both halves
    let left = head;
    let right = prev;
    while (right) {
      if (left.val !== right.val) return false;
      left = left.next;
      right = right.next;
    }
  
    return true;
};

// Time Complexity - 0(n)
// Space Complexity - 0(1)
