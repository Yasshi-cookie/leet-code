class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const m = lengthOfNode(headA)
    const n = lengthOfNode(headB)

    if (m < n) {
        for (let i = 0; i < n - m; i++) {
            headB = headB!.next
        }
    } else if (n < m) {
        for (let i = 0; i < m - n; i++) {
            headA = headA!.next
        }
    }

    while (headA && headB) {
        if (headA === headB) {
            return headA
        }

        headA = headA.next
        headB = headB.next
    }

    return null
};

function lengthOfNode(node: ListNode | null): number {
    if (node == null) {
        return 0
    }

    return lengthOfNode(node.next) + 1
}
