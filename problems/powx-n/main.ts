// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
// @see https://leetcode.com/problems/powx-n/

function myPow(x: number, n: number): number {
    if (n === 0) {
        return 1
    }

    if (n < 0) {
        // n が負の数の場合
        // x^n = (1/x)^(-n) であり、このとき -n は正の数になる
        x = 1 / x
        n = -n
    }

    // 以下 n >= 1 の場合に帰着される

    if (n % 2 === 0) {
        // n が偶数の場合
        // x^n = (x^(n/2))^2 = (x^2)^(n/2) であり、このとき n/2 は整数になる
        return myPow(x * x, n / 2)
    }

    // n が奇数の場合
    // x^n = x * x^(n-1)
    return x * myPow(x, n - 1)
};
