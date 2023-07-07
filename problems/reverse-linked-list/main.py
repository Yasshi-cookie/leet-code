from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

    def toList(self) -> list:
        if (self == None):
            return []

        return self.stackList([])

    def stackList(self, list: list = []) -> list:
        list.append(self.val)

        if (self.next == None):
            return list

        return self.next.stackList(list)

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if (head == None):
            return None

        return self.stackNodeList(head, None)

    def stackNodeList(self, head: ListNode, stack: Optional[ListNode]) -> Optional[ListNode]:
        if (head == None):
            return stack

        return self.stackNodeList(head.next, ListNode(head.val, stack))

test = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5, None)))))
print(Solution().reverseList(test).toList())
