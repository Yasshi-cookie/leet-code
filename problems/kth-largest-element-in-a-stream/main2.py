# TODO: ヒープを使った解法
class KthLargest:
    def __init__(self, k: int, nums: list[int]):
        self.k = k
        self.nums = nums

    def add(self, val: int) -> int:
        pass

    # def searchKthElement(self) -> int:

kthLargest = KthLargest(3, [4, 5, 8, 2])
print(kthLargest.add(3))  # return 4
print(kthLargest.add(5))  # return 5
print(kthLargest.add(10)) # return 5
print(kthLargest.add(9))  # return 8
print(kthLargest.add(4))  # return 8

# Constraints:

# 1 <= k <= 10^4
# 0 <= nums.length <= 10^4
# -10^4 <= nums[i] <= 10^4
# -10^4 <= val <= 10^4
# At most 10^4 calls will be made to add.
# It is guaranteed that there will be at least k elements in the array when you search for the kth element.
