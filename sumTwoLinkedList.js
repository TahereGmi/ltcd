// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Example:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  function addTwoNumbers(l1, l2) {
    let carry = 0;
    let dummy = new ListNode(0);
    let current = dummy;
  
    while (l1 !== null || l2 !== null) {
      let sum = carry;
      if (l1 !== null) {
        sum += l1.val;
        l1 = l1.next;
      }
      if (l2 !== null) {
        sum += l2.val;
        l2 = l2.next;
      }
      carry = Math.floor(sum / 10);
      current.next = new ListNode(sum % 10);
      current = current.next;
    }
  
    if (carry > 0) {
      current.next = new ListNode(carry);
    }
  
    return dummy.next;
  }
  
  // Example usage:
  let l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);
  
  let l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);
  
  console.log(addTwoNumbers(l1, l2)); // Output: ListNode { val: 7, next: ListNode { val: 0, next: ListNode { val: 8, next: null } } }
  