function gcdOfStrings(str1: string, str2: string): string {
    if (! existsGcdOfStrings(str1, str2)) {
        return "";
    }

    return str1.substring(0, gcd(str1.length, str2.length));
};

/**
 * 与えられた2つの文字列に最大公約文字列が存在するかどうかを真偽値で返す
 *
 * @see
 * 命題
 * 以下の2つの条件(a)、(b)は同値である：
 * (a) str1とstr2に最大公約文字列が存在する
 * (b) str1 + str2 === str2 + str1が成り立つ
 *
 * 証明
 * ・(a)を仮定して(b)を示す
 * (a)を仮定すると、ある文字列xと自然数m,nが存在して、
 * str1 = x + x + ... + x（m回の繰り返し）
 * str2 = x + x + ... + x（n回の繰り返し）
 * が成り立つ。
 * このとき、str1 + str2とstr2 + str1の結果はいずれも
 * x + x + ... + x（「m + n」回の繰り返し）となるので、(b)が成り立つ。
 *
 * ・(b)を仮定して(a)を示す
 * (b)を仮定すると、str1 + str2 === str2 + str1なので
 * 少なくともstr1とstr2の1文字目は等しいことが言える。
 * よって、(a)が成り立つ。
 * （証明終）
 */
function existsGcdOfStrings(str1: string, str2: string): boolean {
    return str1 + str2 === str2 + str1;
}

function gcd(n1: number, n2: number): number {
    if (n2 === 0) {
        return n1;
    }

    return gcd(n2, n1 % n2);
}

// Example 1:
// const str1 = "ABCABC";
// const str2 = "ABC";
// console.log(gcdOfStrings(str1, str2));
// Output: "ABC"

// Example 2:
// const str1 = "ABABAB";
// const str2 = "ABAB";
// console.log(gcdOfStrings(str1, str2));
// Output: "AB"

// Example 3:
// const str1 = "LEET";
// const str2 = "CODE";
// console.log(gcdOfStrings(str1, str2));
// Output: ""
