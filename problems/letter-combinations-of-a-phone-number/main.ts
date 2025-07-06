// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

function letterCombinations(digits: string): string[] {
    const mapNumToLetters: { [key: string]: string } = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }

    if (digits.length === 0) {
        return [];
    }

    let result: string[] = [];

    for (let i = 0; i < digits.length; i++) {
        const digit = digits[i];
        const letters = mapNumToLetters[digit];

        if (result.length === 0) {
            for (const letter of letters) {
                result.push(letter);
            }
        } else {
            const currentResult = [...result];
            result = [];

            for (const letter of letters) {
                for (const combination of currentResult) {
                    result.push(combination + letter);
                }
            }
        }
    }

    return result;
};


// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
const digits1 = "23";
console.log(letterCombinations(digits1));

// Example 2:
// Input: digits = ""
// Output: []
const digits2 = "";
console.log(letterCombinations(digits2));

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]
const digits3 = "2";
console.log(letterCombinations(digits3));
