/**
 * @see https://leetcode.com/problems/linked-list-cycle-ii/
 *
 * Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
 * There is a cycle in a linked list if there is some node in the listthat can be reached again by continuously following the next pointer.
 * Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed).
 * It is -1 if there is no cycle. Note that pos is not passed as a parameter.
 * Do not modify the linked list.
 */

/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 * あるリストLがサイクルを持つとは
 * ある整数 k, n が存在して、任意の整数 i に対して
 * L_{i+n} = L_{i}
 * が成り立つことをいう
 */
function detectCycle(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    let isCycle = false;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;

        // オブジェクト同士の比較演算はそれぞれのメモリアドレスが等しいかどうかを見ていることに注意する
        if (slow === fast) {
            isCycle = true;
            break;
        }
    }

    if (!isCycle) {
        return null;
    }

    let listNode1: ListNode | null = head;
    let listNode2: ListNode | null = slow;
    while (listNode1 !== listNode2) {
        listNode1 = listNode1!.next;
        listNode2 = listNode2!.next;
    }

    return listNode1;
};
