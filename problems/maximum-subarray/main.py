class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        # 部分配列の和の最大値を初期化
        max_sum = nums[0]
        # 次の条件を満たす「dp配列」を作成していく。
        # 条件：dp配列のi番目の要素は、numsのi番目の要素を終点とする部分配列の和の最大値である。
        # dp配列を初期化
        dp = [0] * len(nums)
        dp[0] = max_sum
        for i in range(1, len(nums)): # 初めの要素は初期化の時に見たのでスキップする
            # dp配列のi番目の要素を更新
            dp[i] = max(dp[i - 1] + nums[i], nums[i])
            # 最大値を更新
            max_sum = max(dp[i], max_sum)

        return max_sum

nums = [5,4,-1,7,8]
print(Solution().maxSubArray(nums))

# 解説
# https://drive.google.com/file/d/1lkETT2PdqEdlo3oMNL9QF74zPoZpDuPt/view?usp=sharing
