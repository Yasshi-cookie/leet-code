from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        return self.stackCycle(head, [])

    def stackCycle(self, head: Optional[ListNode], stack: list) -> bool:
        if (head == None):
            return False
        if (head in stack):
            return True
        return self.stackCycle(head.next, stack + [head])
