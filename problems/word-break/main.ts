// Given a string s and a dictionary of strings wordDict,
// return true if s can be segmented into a space-separated sequence of one or more dictionary words.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.

function wordBreak(s: string, wordDict: string[]): boolean {
    const wordSet = new Set(wordDict);
    // dp[i] := s[0..i-1] が wordDict の単語で分割可能かどうか
    const dp: boolean[] = Array(s.length + 1).fill(false);
    // 空文字列は常に分割可能とする
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                // s[0..j-1] が分割可能で、s[j..i-1] が wordDict に含まれるなら、s[0..i-1] も分割可能である
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
};

// // Example 1:
// // Input: s = "leetcode", wordDict = ["leet","code"]
// // Output: true
// // Explanation: Return true because "leetcode" can be segmented as "leet code".
// const s1 = "leetcode"
// const wordDict1 = ["leet", "code"]
// console.log(wordBreak(s1, wordDict1)) // true

// // Example 2:
// // Input: s = "applepenapple", wordDict = ["apple","pen"]
// // Output: true
// // Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// // Note that you are allowed to reuse a dictionary word.
// const s2 = "applepenapple"
// const wordDict2 = ["apple","pen"]
// console.log(wordBreak(s2, wordDict2)) // true

// Example 3:
// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false
const s3 = "catsandog"
const wordDict3 = ["cats","dog","sand","and","cat"]
console.log(wordBreak(s3, wordDict3)) // true
