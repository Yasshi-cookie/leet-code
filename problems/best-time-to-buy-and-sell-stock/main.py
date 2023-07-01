class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        if (len(prices) == 0 or len(prices) == 1):
            return 0

        min_price = prices.pop(0)
        max_profit = 0

        for price in prices:
            if (price < min_price):
                min_price = price
            elif (price > min_price):
                max_profit = max(max_profit, price - min_price)

        return max_profit

request = [1,2,3,4,3,2,1]
print(Solution().maxProfit(request))
