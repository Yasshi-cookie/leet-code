# 別解
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
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if (list2 == None):
            return list1
        if (list1 == None):
            return list2

        if (list1.val <= list2.val):
            return ListNode(list1.val, self.mergeTwoLists(list1.next, list2))
        else:
            return ListNode(list2.val, self.mergeTwoLists(list1, list2.next))

list_a1 = ListNode(1, ListNode(2, ListNode(4, None)))
list_b1 = ListNode(1, ListNode(3, ListNode(4, None)))
list_a2 = None
list_b2 = None
list_a3 = None
list_b3 = ListNode(0, None)
list_a4 = ListNode(1, None)
list_b4 = ListNode(2, None)


test = Solution().mergeTwoLists(list_a4, list_b4)
if (test == None):
    answer = []
else:
    answer = test.toList()
print(answer)
