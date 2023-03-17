// Given the head of a singly linked list, reverse the list, and return the reversed list.

function reverseList(head) {
    let prev = null;
    let curr = head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
}

// Recursively reverse the linkedList
function reverseLinkedListRecursively(head) {
    if (head === null || head.next === null) {
      return head;
    }
  
    let reversedListHead = reverseLinkedListRecursively(head.next);
  
    head.next.next = head;
    head.next = null;
  
    return reversedListHead;
}
  