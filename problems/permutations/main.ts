/**
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 *
 * @see https://leetcode.com/problems/permutations/description/
 *
 * 解説（開始） -----------------------------------
 *
 * 設定（開始） -----------------------------------
 *
 * A := {異なる数値からなるリスト全体}とする
 *
 * 任意の list ∈ A に対して 写像fを次で定める
 * f(list) := 「list に対する可能な全ての順列」を要素に持つ配列
 *
 * 注意：和集合を表す U はプログラムで言うところの配列どうしの「結合」です。適宜読み替えてください。
 *
 * 設定（終了） -----------------------------------
 *
 * numsをLeetCodeの問題で与えられる入力値とする。
 * LeetCodeの問題に対する答えは、f(nums) であるので、以下それを求めていく。
 *
 * 写像 f には次の帰納的な性質がある
 *
 * 定理（開始） -----------------------------------
 * list ∈ A とする。L := 「listの長さ」と置く。
 *
 * (a) L >= 2 のとき次が成り立つ。
 *     f(list) = (f(listから0番目の要素を除いて出来るリスト) の各要素の先頭に「list[0]」を入れて出来るリストのリスト)
 *             U (f(listから1番目の要素を除いて出来るリスト) の各要素の先頭に「list[1]」を入れて出来るリストのリスト)
 *             ...
 *             U (f(listから「L-1」番目の要素を除いて出来るリスト) の各要素の先頭に「list[L-1]」を入れて出来るリストのリスト)
 *
 * (b) L = 1 のとき次が成り立つ
 *     f(list) = [[list[0]]]
 * 定理（終了） -----------------------------------
 *
 * 定理の例（開始）---------------------------------
 * list = [1,2,3]とする。L := 「listの長さ」とおく。
 *
 * L = 3 である。
 * f(list) = (f(listから0番目の要素を除いて出来るリスト) の各要素の先頭に「list[0]」を入れて出来るリストのリスト)
 *           U (f(listから1番目の要素を除いて出来るリスト) の各要素の先頭に「list[1]」を入れて出来るリストのリスト)
 *           U (f(listから2番目の要素を除いて出来るリスト) の各要素の先頭に「list[2]」を入れて出来るリストのリスト)
 *         = (f([2,3]) の各要素の先頭に「1」を入れて出来るリストのリスト)
 *           U (f([1,3]) の各要素の先頭に「2」を入れて出来るリストのリスト)
 *           U (f([1,2]) の各要素の先頭に「3」を入れて出来るリストのリスト)
 *
 * ここで、
 * f([2,3]) = (f([3]) の各要素の先頭に「2」を入れて出来るリストのリスト)
 *           U (f([2]) の各要素の先頭に「3」を入れて出来るリストのリスト)
 *          = ([[3]] の各要素の先頭に「2」を入れて出来るリストのリスト)
 *           U ([[2]] の各要素の先頭に「3」を入れて出来るリストのリスト)
 *          = [[2,3]] U [[3,2]]
 *          = [[2,3],[3,2]]
 * 同様に、
 * f([1,3]) = [[1,3],[3,1]]
 * f([1,2]) = [[1,2],[2,1]]
 * を得る。
 *
 * よって、
 * f(list) = ([[2,3],[3,2]] の各要素の先頭に「1」を入れて出来るリストのリスト)
 *           U ([[1,3],[3,1]] の各要素の先頭に「2」を入れて出来るリストのリスト)
 *           U ([[1,2],[2,1]] の各要素の先頭に「3」を入れて出来るリストのリスト)
 *         = ([[1,2,3],[1,3,2]])
 *           U ([[2,1,3],[2,3,1]])
 *           U ([[3,1,2],[3,2,1]])
 *         = [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * よって、f([1,2,3]) = [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * 定理の例（終了）---------------------------------
 *
 * 上記の性質に基づいてf(nums)を計算する処理を実装する。
 * ただし、以下では上記の記述の写像fはpermuteに読み替える。
 */
function permute(nums: number[]): number[][] {
    // 注意：nums.length >= 1 は保証されている
    const L = nums.length

    if (L === 1) {
        // 終了条件
        return [[nums[0]]]
    }

    let response: number[][] = []

    for (let i = 0; i < L; i++) {
        // 破壊的な変更を行うので現時点のnumsのコピーをとっておく
        let capturedNums = Array.from(nums)
        // numsからi番目の要素を取り除く
        capturedNums.splice(i, 1)

        // subListsに「numsからi番目の要素を取り除いて出来るリスト」にpermuteを作用させた結果を格納する
        let subLists = permute(capturedNums)

        subLists.forEach((list: number[]) => {
            // subListsの各要素（数値のリスト）の先頭にnums[i]を入れる
            list.unshift(nums[i])
            response.push(list)
        })
    }

    return response
}

// /**
//  * Given an array nums of distinct integers, return all the possible permutations.
//  * You can return the answer in any order.
//  *
//  * @see https://leetcode.com/problems/permutations/description/
//  */
// function permute(nums: number[]): number[][] {
//     let list: number[][] = [];
//     backtrack(list, [], nums);
//     return list;
// }

// /**
//  * 与えられたlistに、次の方法でnumsの中から全ての順列の組み合わせを持つリストを格納する
//  *
//  * 「numsの中から全ての順列の組み合わせ」を構築する方法
//  */
// function backtrack(list: number[][], buildingList: number[], nums: number[]) {
//     if (buildingList.length === nums.length) {
//         // buildingListに順列が構築されたら、listにその順列のコピーを格納する。
//         // コピーを格納する理由は、後続の処理でbuildingListに破壊的な変更を行う処理があるため
//         list.push(Array.from(buildingList));
//     } else {
//         for (let i = 0; i < nums.length; i++) {
//             if (buildingList.includes(nums[i])) {
//                 // 既に追加している要素はスキップする
//                 continue;
//             }

//             // 未だ追加していない要素からスタートする
//             buildingList.push(nums[i]);
//             backtrack(list, buildingList, nums);
//             buildingList.pop();
//         }
//     }
// }

/**
 * 考察
 */
// const l = nums.length

// if (l === 1) {
//     return [[nums[0]]]
// }

// if (l === 2) {
//     return [
//         [nums[0], nums[1]],
//         [nums[1], nums[0]],
//     ]
// }

// if (l === 3) {
//     return [
//         [nums[0], nums[1], nums[2]],
//         [nums[0], nums[2], nums[1]],
//         [nums[1], nums[0], nums[2]],
//         [nums[1], nums[2], nums[0]],
//         [nums[2], nums[0], nums[1]],
//         [nums[2], nums[1], nums[0]],
//     ]
// }

// if (l === 4) {
//     return [
//         [nums[0], nums[1], nums[2], nums[3]],
//         [nums[0], nums[1], nums[3], nums[2]],
//         [nums[0], nums[2], nums[1], nums[3]],
//         [nums[0], nums[2], nums[3], nums[1]],
//         [nums[0], nums[3], nums[1], nums[2]],
//         [nums[0], nums[3], nums[2], nums[1]],
//         [nums[1], nums[0], nums[2], nums[3]],
//     ]
// }

// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
let nums = [1,2,3,4]
console.log(permute(nums))

// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:
// Input: nums = [1]
// Output: [[1]]
