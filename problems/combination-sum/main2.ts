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
