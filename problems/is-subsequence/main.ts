// function isSubsequence(s: string, t: string): boolean {
//     if (s.length === 0) {
//         return true;
//     }

//     if (t.length === 0) {
//         return false;
//     }

//     let charsOfS = s.split('');
//     let charOfS = charsOfS.shift();
//     for (let i = 0; i < t.length; i++) {
//         const char = t[i];
//         if (charOfS == char) {
//             if (charsOfS.length === 0) {
//                 return true;
//             }
//             charOfS = charsOfS.shift();
//         }
//     }

//     return false;
// }

/**
 * 改良版
 * @param s 
 * @param t
 * @returns {boolean}
 */
function isSubsequence(s: string, t: string): boolean {
    if (s.length === 0) {
        return true;
    }

    if (t.length === 0) {
        return false;
    }

    if (s.length > t.length) {
        return false;
    }

    const s_length = s.length;
    const t_length = t.length;
    let subsequence = 0;
    for (let i = 0; i < t_length; i++) {
        if (s[subsequence] === t[i]) {
            subsequence++;

            if (subsequence > s_length - 1) {
                return true;
            }
        }
    }

    return false;
}

// Example 1:
// Input:
const s = "axc";
const t = "ahbgdc";
console.log(isSubsequence(s, t));
// Output: true
