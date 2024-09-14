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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 === null) {
        return l2
    }

    if (l2 === null) {
        return l1
    }

    // Step.1 それぞれのリストの値を桁ごとに足して和を求める

    let sum = 0
    let digit = 0

    while (l1 !== null || l2 !== null) {
        sum +=  (l1 === null ? 0 : l1.val * 10 ** digit)
            + (l2 === null ? 0 : l2.val * 10 ** digit)

        console.log(sum)
        // 更新条件
        digit++
        l1 = l1 === null ? null : l1.next
        l2 = l2 === null ? null : l2.next
    }

    console.log({ sum, digit })

    // Step.2 和をリストに変換する

    let response: ListNode | null = null

    splitByDigit(sum, digit).forEach((num) => {
        response = new ListNode(num, response)
    })

    return response
};

// /**
//  * 与えられた数値を桁ごとに分割して配列にして返す
//  */
// function splitByDigit(num: number, digit: number): number[] {
//     let response: number[] = []

//     for (let i = digit - 1; i >= 0; i--) {
//         const pow = 10 ** i
//         const quotient = Math.floor(num / pow)
//         response.push(quotient)
//         num -= quotient * pow
//     }

//     return response
// }

/**
 * 与えられた数値を桁ごとに分割して配列にして返す
 */
function splitByDigit(num: number, digit: number): number[] {
    return String(num).split('').map(Number)
}

// Test cases
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

// l1 = [2,4,9]
// l2 = [5,6,4,9]
console.log(addTwoNumbers(
    new ListNode(2, new ListNode(4, new ListNode(9))),
    new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(9))))
)); // 7 -> 0 -> 4 -> 0 -> 1

// l1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// l2 = [5,6,4]
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

// for (let i = 0; i < 50; i++) {
//     console.log({
//         i,
//         result: String(10 ** i)
//     })
// }

// console.log({
//     a: (10 ** 16 + 1),
//     b: (10 ** 16 + 1) % 10,
//     b1: (10 ** 15 + 1) % 10,
//     c: 1 % 10
// })
