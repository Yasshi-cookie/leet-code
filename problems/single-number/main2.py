# 別解
class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        xor = 0
        for num in nums:
            xor ^= num
            print(xor)

        return xor

# Solution().singleNumber([4,1,2,1,2])

print(4 ^ 4)
# a = 4 = 100
# b = 1 = 001
# a ^ b = 101
# 二項演算「^」の性質について
# ① 交換法則が成り立つ
# ② a ^ a = 0
# ③ a ^ 0 = a
# この問題には以上の性質を使っている
