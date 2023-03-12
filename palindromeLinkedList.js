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