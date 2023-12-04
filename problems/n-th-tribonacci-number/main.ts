// https://leetcode.com/problems/n-th-tribonacci-number/
// The Tribonacci sequence Tn is defined as follows:
// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
// Given n, return the value of Tn.

// Constraints:
// 0 <= n <= 37
// The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.

/**
 * 下記のように愚直に解くとn=34でタイムアウトします。↓
 */
// function tribonacci(n: number): number {
//     if (n === 0) {
//         return 0;
//     }

//     if (n === 1) {
//         return 1;
//     }

//     if (n === 2) {
//         return 1;
//     }

//     return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
// };

function tribonacci(n: number): number {
    let sequence = [
        0,
        1,
        1,
    ]

    if (n in sequence) {
        return sequence[n];
    }

    for (let i = 3; i <= n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2] + sequence[i - 3]);
    }

    return sequence[n];
};

function sum(sequence: Array<number>): number {
    return sequence.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });
}

// Example 1:
// console.log(tribonacci(4));
// Output: 4

// Example 2:
console.log(tribonacci(25));
// Output: 1389537
