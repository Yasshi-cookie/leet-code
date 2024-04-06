function minimumSum(num: number): number {
    // num = 2932
    let nums = String(num).split('').map((numString) => { return Number(numString) })
    // nums = [2, 9, 3, 2]
    nums.sort((a, b) => a - b)
    // nums = [2, 2, 3, 9]

    const new1 = 10 * nums[0] + nums[2]
    const new2 = 10 * nums[1] + nums[3]
    // new1 = 23
    // new2 = 29

    return new1 + new2
};
