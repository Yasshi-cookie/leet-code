function combinationSum(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b)

    let result: number[][] = []

    function backtrack(start: number, remain: number, path: number[]) {
        if (remain === 0) {
            result.push([...path])
            return
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > remain) break

            path.push(candidates[i])
            backtrack(i, remain - candidates[i], path)
            path.pop()
        }
    }

    backtrack(0, target, [])
    return result
}

// Test cases
// console.log(combinationSum([1,2], 4)) // Output: [[1,1,1,1],[1,1,2],[2,2]]
// console.log(combinationSum([2,3,6,7], 7)) // Output: [[2,2,3],[7]]
console.log(combinationSum([2,3,5], 8)) // Output: [[2,2,2,2],[2,3,3],[3,5]]
// console.log(combinationSum([2], 1)) // Output: []
