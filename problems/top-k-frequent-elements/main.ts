// Given an integer array nums and an integer k, return the k most frequent elements.
// You may return the answer in any order.
// @see https://leetcode.com/problems/top-k-frequent-elements/

function topKFrequent(nums: number[], k: number): number[] {
    /**
     * クラス定義
     */

    /**
     * 降順の優先度付きキュー
     * ロジックは PriorityQueue に持たせている
     */
    class DescendingPriorityQueue<T> {
        private priorityQueue: PriorityQueue<T>;

        constructor(priorityQueue: PriorityQueue<T> = new PriorityQueue<T>()) {
            this.priorityQueue = priorityQueue;
        }

        enqueue(item: T, priority: number): void {
            this.priorityQueue.enqueue(item, -priority);
        }

        dequeue(): T | undefined {
            return this.priorityQueue.dequeue();
        }
    }

    /**
     * 優先度付きキュー
     */
    class PriorityQueue<T> {
        private queue: { priority: number; item: T }[] = []

        // キューに要素を追加し、優先度に基づいてソートする
        enqueue(item: T, priority: number): void {
            this.queue.push({ item, priority });
            this.queue.sort((a, b) => a.priority - b.priority);
        }

        // キューから優先度の高い要素を取り出す
        dequeue(): T | undefined {
            return this.queue.shift()?.item;
        }
    }

    /**
     * 解答
     */

    // nums の各要素の出現回数をnumToFrequencyに格納する
    const numToFrequency = new Map<number, number>()
    for (const num of nums) {
        numToFrequency.set(num, (numToFrequency.get(num) ?? 0) + 1)
    }

    // numToFrequency の各要素をDescendingPriorityQueueにエンキューする
    const descendingPriorityQueue = new DescendingPriorityQueue<number>()
    for (const [num, frequency] of numToFrequency) {
        descendingPriorityQueue.enqueue(num, frequency)
    }

    // descendingPriorityQueue からk個の要素をデキューして返す
    let result: number[] = []
    for (let i = 0; i < k; i++) {
        const dequeuedNum = descendingPriorityQueue.dequeue()

        if (dequeuedNum === undefined) {
            throw new Error('与えられた整数 k が nums の一意な要素の数を超えています。')
        }

        result.push(dequeuedNum)
    }

    return result
};

// Test cases
console.log(topKFrequent([1,1,1,2,2,3], 2)) // Output: [1,2]
console.log(topKFrequent([1], 1)) // Output: [1]
