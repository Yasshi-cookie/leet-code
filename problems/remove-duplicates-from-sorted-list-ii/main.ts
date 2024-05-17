// Given the head of a sorted linked list,
// delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
// Return the linked list sorted as well.
// @see https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    return stackIfUnique(head, null)
};

function stackIfUnique(head: ListNode | null, previousNode: ListNode | null): ListNode | null {
    if (head === null) {
        return null
    }

    if (previousNode && head.val === previousNode.val) {
        return stackIfUnique(head.next, head)
    }

    if (head.next === null) {
        return head
    }

    if (head.val === head.next.val) {
        return stackIfUnique(head.next, head)
    }

    return new ListNode(head.val, stackIfUnique(head.next, head))
}
