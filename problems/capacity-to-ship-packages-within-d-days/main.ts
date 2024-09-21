// A conveyor belt has packages that must be shipped from one port to another within days days.
// The ith package on the conveyor belt has a weight of weights[i].
// Each day, we load the ship with packages on the conveyor belt (in the order given by weights).
// We may not load more weight than the maximum weight capacity of the ship.
// Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.
// @see https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

function shipWithinDays(weights: number[], days: number): number {
    /**
     * 与えられたcapacityを1日あたりの最大積載量とするとき、
     * days日以内に荷物weightsを運ぶことができるかどうかを判定する。
     */
    function loadableByCapacity(capacity: number): boolean {
        let day = 1
        let currentWeight = 0

        for (const weight of weights) {
            if (currentWeight + weight > capacity) {
                // capacityを超える場合は、次の日に運ぶ
                day += 1
                currentWeight = weight
            } else {
                // capacityを超えない場合は、その日に運ぶ
                currentWeight += weight
            }
        }

        return day <= days
    }

    // 次が成り立つことに注意する
    // max(weights) <= shipWithinDays(weights, days) <= sum(weights)
    // ここで、left、rightをそれぞれ shipWithinDays(weights, days) の下限、上限と置く。
    let left = Math.max(...weights)
    let right = sum(weights)

    // 便宜上、求める解を x := shipWithinDays(weights, days) と置く。
    // left <= x <= right の範囲で二分探索して、解を求める。
    while (left < right) {
        const candidateOfCapacity = Math.floor((left + right) / 2)

        if (loadableByCapacity(candidateOfCapacity)) {
            // 最大積載量が candidateOfCapacity の時に運べる場合

            // x <= candidateOfCapacity が成り立つため、
            // left <= x <= candidateOfCapacity の範囲に解が存在する。
            right = candidateOfCapacity
        } else {
            // 最大積載量が candidateOfCapacity の時に運べない場合

            // candidateOfCapacity < x が成り立つため、
            // candidateOfCapacity + 1 <= x <= right の範囲に解が存在する。
            left = candidateOfCapacity + 1
        }
    }

    return left
};

function sum(nums: number[]): number {
    let response = 0

    for (const num of nums) {
        response += num
    }

    return response
}

// Test cases
console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5)); // 15
console.log(shipWithinDays([3,2,2,4,1,4], 3)); // 6
console.log(shipWithinDays([1,2,3,1,1], 4)); // 3
