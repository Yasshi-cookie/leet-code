// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 * n, m を自然数とする。
 * l1 = [a0, a1, a2, ..., an-1]
 * l2 = [b0, b1, b2, ..., bm-1]
 *
 * このとき、l1を逆に並べてできる数とl2を逆に並べてできる数の和をリストにして逆順にすると下記のようになる。
 *
 * 【証明】
 * n >= m と仮定しても一般性を失わない。
 * (a(n-1) * 10^0 + a(n-2) * 10^1 + a(n-3) * 10^2 + ... + a0 * 10^(n-1))
 * + (b(m-1) * 10^0 + b(m-2) * 10^1 + b(m-3) * 10^2 + ... + b0 * 10^(m-1))
 * = a(n-1) * 10^0 + ... + am * 10^(m-2) + (a(m-1) + b(m-1)) * 10^(m-1) + ... + (a0 + b0) * 10^(n-1)
 * ↓ リストにして逆順にする
 * [a0 + b0, a1 + b1, a2 + b2, ..., a(m-1) + b(m-1), a(m), ..., a(n-1)]
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    function calc(l1: ListNode | null, l2: ListNode | null, carry: number): ListNode | null {
        if (l1 === null && l2 === null && carry === 0) {
            // 互いに足すものがなく、繰り上げもない場合は計算終了
            return null
        }

        const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry
        carry = Math.floor(sum / 10) // 2桁以上の場合は繰り上げを記録する

        return new ListNode(sum % 10, calc(l1 ? l1.next : null, l2 ? l2.next : null, carry))
    }

    return calc(l1, l2, 0)
};

// Test cases
// console.log(addTwoNumbers(
//     new ListNode(8, new ListNode(1)),
//     new ListNode(9, new ListNode(1))
// ));

// console.log(addTwoNumbers(
//     new ListNode(2, new ListNode(4, new ListNode(3))),
//     new ListNode(5, new ListNode(6, new ListNode(4)))
// )); // 7 -> 0 -> 8

// console.log(addTwoNumbers(
//     new ListNode(0),
//     new ListNode(0)
// )); // 0

// console.log(addTwoNumbers(
//     new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))),
//     new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))
// ))); // 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1

// console.log(addTwoNumbers(
//     new ListNode(9, new ListNode(9, new ListNode(9))),
//     new ListNode(9)
// ));

// // l1 = [2,4,9]
// // l2 = [5,6,4,9]
// console.log(addTwoNumbers(
//     new ListNode(2, new ListNode(4, new ListNode(9))),
//     new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(9))))
// )); // 7 -> 0 -> 4 -> 0 -> 1

// // l1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// // l2 = [5,6,4]
// console.log(addTwoNumbers(
//     new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,
//         new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,
//         new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,
//         new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,
//         new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,
//         new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,
//         new ListNode(1, null))))))))))))))))))))))))))))))),
//     new ListNode(5, new ListNode(6, new ListNode(4)))
// )); // [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
