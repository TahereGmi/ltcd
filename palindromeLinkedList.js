// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// To determine if a singly linked list is a palindrome, we can follow these steps:

// Traverse the list to determine its length.
// Traverse the list again to push each node's value into an array.
// Check if the array is a palindrome.

function isPalindrome(head) {
    let length = 0;
    let node = head;
    
    // Determine length of the list
    while (node !== null) {
      length++;
      node = node.next;
    }
    
    // Traverse the list again to populate an array
    const values = new Array(length);
    node = head;
    for (let i = 0; i < length; i++) {
      values[i] = node.val;
      node = node.next;
    }
    
    // Check if the array is a palindrome
    for (let i = 0; i < length / 2; i++) {
      if (values[i] !== values[length - 1 - i]) {
        return false;
      }
    }
    return true;
}

// in O(n) time and O(1) space
// nafahmidam chikar mikone :(

function isPalindrome(head) {
    if (!head || !head.next) return true; // edge cases
    
    // Find the middle of the linked list
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    
    // Reverse the second half of the linked list
    let prev = null;
    let curr = slow.next;
    while (curr) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    
    // Compare the first half with the reversed second half
    let p1 = head;
    let p2 = prev;
    while (p2) {
      if (p1.val !== p2.val) return false;
      p1 = p1.next;
      p2 = p2.next;
    }
    
    return true;
  }
  