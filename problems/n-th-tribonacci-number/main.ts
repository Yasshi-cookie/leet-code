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

// function tribonacci(n: number): number {
//     let sequence = [
//         0,
//         1,
//         1,
//     ]

//     if (n in sequence) {
//         return sequence[n];
//     }

//     for (let i = 3; i <= n; i++) {
//         sequence.push(sequence[i - 1] + sequence[i - 2] + sequence[i - 3]);
//     }

//     return sequence[n];
// };

// /**
//  * 線形反復再帰プロセスによる解き方
//  */
// function tribonacci(n: number): number {
//     return tribIter(1, 1, 0, n);
// };

// function tribIter(a2: number, a1: number, a0: number, counter: number): number {
//     if (counter === 0) {
//         return a0;
//     }

//     return tribIter(a2 + a1 + a0, a2, a1, counter - 1);
// }

/**
 * 計算量：O(log n)？
 */
function tribonacci(n: number): number {
    return fastTribIter(1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, n);
}

/**
 * tribonacci数列を1項進める変換（R^3→R^3）の表現行列をPとし、Pの第i,j成分をpijとする。
 *
 * @param a tribonacci数列の項
 * @param b tribonacci数列の項
 * @param c tribonacci数列の項
 * @param p11
 * @param p21
 * @param p31
 * @param p12
 * @param p22
 * @param p32
 * @param p13
 * @param p23
 * @param p33
 * @param count
 * @returns
 */
function fastTribIter(
    a: number,
    b: number,
    c: number,
    p11: number,
    p21: number,
    p31: number,
    p12: number,
    p22: number,
    p32: number,
    p13: number,
    p23: number,
    p33: number,
    count: number
): number {
    if (count === 0) {
        return c;
    } else if (count % 2 === 0) {
        // countが偶数の場合は表現行列を2乗する
        return fastTribIter(
            a,
            b,
            c,
            p11 * p11 + p21 * p12 + p31 * p13,
            p11 * p21 + p21 * p22 + p31 * p23,
            p11 * p31 + p21 * p32 + p31 * p33,
            p12 * p11 + p22 * p12 + p32 * p13,
            p12 * p21 + p22 * p22 + p32 * p23,
            p12 * p31 + p22 * p32 + p32 * p33,
            p13 * p11 + p23 * p12 + p33 * p13,
            p13 * p21 + p23 * p22 + p33 * p23,
            p13 * p31 + p23 * p32 + p33 * p33,
            count / 2
        );
    } else {
        // countが奇数の場合は表現行列をtribonacci数から成るベクトル（a, b, cを縦に並べてできる3次元の縦ベクトル）
        // にかけてベクトル（a,b,c）を更新する
        return fastTribIter(
            a * p11 + b * p12 + c * p13,
            a * p21 + b * p22 + c * p23,
            a * p31 + b * p32 + c * p33,
            p11,
            p21,
            p31,
            p12,
            p22,
            p32,
            p13,
            p23,
            p33,
            count - 1
        );
    }
}

// Example 1:
// console.log(tribonacci(4));
// Output: 4

// Example 2:
console.log(tribonacci(25));
// Output: 1389537


// function fib(n: number): number {
//     function fibIter(a: number, b: number, p: number, q: number, count: number): number {
//         if (count === 0) {
//             return b;
//         } else if (count % 2 === 0) {
//             return fibIter(a, b, p * p + q * q, 2 * p * q + q * q, count / 2);
//         } else {
//             return fibIter(b * q + a * q + a * p, b * p + a * q, p, q, count - 1);
//         }
//     }
//     return fibIter(1, 0, 0, 1, n);
// }

// console.log(fib(6)); // 例として10番目のフィボナッチ数を計算
