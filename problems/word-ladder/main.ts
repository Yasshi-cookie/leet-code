// A transformation sequence from word beginWord to word endWord
// using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk
// such that:
// ・Every adjacent pair of words differs by a single letter.
// ・Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// ・sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList,
// return the number of words in the shortest transformation sequence from beginWord to endWord,
// or 0 if no such sequence exists.

// Constraints:
// 1 <= beginWord.length <= 10
// endWord.length == beginWord.length
// 1 <= wordList.length <= 5000
// wordList[i].length == beginWord.length
// beginWord, endWord, and wordList[i] consist of lowercase English letters.
// beginWord != endWord
// All the words in wordList are unique.

// @see https://leetcode.com/problems/word-ladder/

/**
 * 例1
 * beginWord = "ai"
 * endWord = "it"
 * wordList = ["at", "it", "ab", "ib"]
 *
 * 解答
 * 変換列
 * (beginWord =) ai -> at -> it (= endWord)
 * 長さは3
 *
 *      at -> it
 *    /
 * ai
 *    \
 *      ab -> ib -> it
 *
 * 逆から辿ると、
 *
 *      at -> ai
 *    /
 * it
 *    \
 *      ib -> ab -> ai
 *
 */
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    if (! wordList.some(word => word === endWord)) {
        return 0
    }

    // wordListからbeginWordとendWordを除外する
    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i] === beginWord) {
            wordList.splice(i, 1)
            break
        }
    }

    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i] === endWord) {
            wordList.splice(i, 1)
            break
        }
    }

    return calcLadderLength(beginWord, endWord, wordList, 0) + 2 // beginWordとendWordを含める
};

function convertibleByOneReplacement(a: string, b: string): boolean {
    let diff = 0

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            diff++
        }
    }

    return diff === 1
}

function calcLadderLength(beginWord: string, endWord: string, wordList: string[], sum: number): number {
    for (let i = 0; i < wordList.length; i++) {
        const word = wordList[i]

        if (convertibleByOneReplacement(word, endWord)) {
            console.log({word, endWord, wordList, sum})
            wordList.splice(i, 1)
            return calcLadderLength(beginWord, word, wordList, sum + 1)
        }
    }

    return sum
}

// Test cases
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])) // Output: 5
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])) // Output: 0
console.log(ladderLength("hot", "dog", ["hot","dog","dot"])) // Output: 3
