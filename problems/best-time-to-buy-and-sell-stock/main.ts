function maxProfit(prices: number[]): number {
    if (prices.length == 0 || prices.length == 1) {
        return 0;
    }

    let min_price = prices.shift()!;
    let max_profit = 0;

    prices.forEach((price: number) => {
        if (price < min_price) {
            min_price = price;
        }
        else if (price > min_price) {
            max_profit = Math.max(max_profit, price - min_price);
        }
    });

    return max_profit;
};

const prices1 = [7,1,5,3,6,4];
const prices2 = [7,6,4,3,1];
console.log(maxProfit(prices1));
