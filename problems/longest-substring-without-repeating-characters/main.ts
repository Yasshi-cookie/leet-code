// Given a string s, find the length of the longest substring without repeating characters.
// @see https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * 愚直に解く場合次のようになる。
 * function lengthOfLongestSubstring(s: string): number {
 *     const n = s.length;
 *     let response = 0;
 *     for (let left = 0; left < n; left++) {
 *         let subString = new Set<string>();
 *         for (let right = left; right < n; right++) {
 *             // 重複した文字が見つかったらループを抜ける
 *             if (subString.has(s[right])) {
 *                 break;
 *             }
 *             subString.add(s[right]);
 *             // 条件を満たす部分文字列の最大長を更新
 *             response = Math.max(response, right - left + 1);
 *         }
 *     }
 *
 *     return response;
 * }
 */
function lengthOfLongestSubstring(s: string): number {
    const n = s.length;
    let left = 0;
    let subString = new Set<string>();

    let response = 0;

    for (let right = 0; right < n; right++) {
        // 重複した文字を見つけた場合、重複していない文字が出るまで左端を進める
        while (subString.has(s[right])) {
            subString.delete(s[left]);
            left++;
        }
        subString.add(s[right]);

        // 条件を満たす部分文字列の最大長を更新
        response = Math.max(response, right - left + 1);
    }

    return response;
};

// テストケース
console.log(lengthOfLongestSubstring("abcbde")); // 4
// console.log(lengthOfLongestSubstring("abcabcbb")); // 3
// console.log(lengthOfLongestSubstring("bbbbb")); // 1
// console.log(lengthOfLongestSubstring("pwwkew")); // 3
