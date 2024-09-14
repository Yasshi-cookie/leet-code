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

    let reversedL1Array = listNodeToArray(l1).reverse()
    let reversedL2Array = listNodeToArray(l2).reverse()

    // 繰り上げを記録する変数
    let carry = 0
    let sumArray: number[] = []

    while (reversedL1Array.length > 0 || reversedL2Array.length > 0) {
        const num1 = reversedL1Array.pop()
        const num2 = reversedL2Array.pop()

        const sum = (num1 ?? 0) + (num2 ?? 0) + carry
        carry = Math.floor(sum / 10) // 2桁以上の場合は繰り上げを記録する
        console.log({ sum, carry })
        sumArray.push(sum % 10)
    }

    if (carry > 0) {
        // 最上位の桁で繰り上げがある場合は、追加する
        sumArray.push(carry)
    }

    return arrayToListNode(sumArray.reverse())
};

function listNodeToArray(list: ListNode | null): number[] {
    let response: number[] = []

    while (list !== null) {
        response.push(list.val)
        list = list.next
    }

    return response
}

function arrayToListNode(array: number[]): ListNode | null {
    let response: ListNode | null = null

    array.forEach((num) => {
        response = new ListNode(num, response)
    })

    return response
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

// console.log(addTwoNumbers(
//     new ListNode(9, new ListNode(9, new ListNode(9))),
//     new ListNode(9)
// )); // 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1

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
