// 121. 买卖股票的最佳时机
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/

// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
// 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

// 输入: [7,1,5,3,6,4]
// 输出: 5

// 思路：
// 1. 设置 buyP 为 -1，因为价格范围可能为 0，开始遍历
// 2. 如果今日小于明日，说明今日是起涨日，如果尚未购入，将今日价格设为购入价格
// 3. 如果设置了购入价格，并且明日价格更高，取明日利润与当前利润间的最大值
// 4. 如果今日价格比已记录的购入价还低, 说明可以重新尝试购入
// 5. 未来如果能获得更高的利润, 自然会被 max 方法获取, 否则仍然以前一次买卖的利润作结果
var maxProfit = function(prices) {
    let ans = 0;
    let buyP = -1;
    for (let i = 0; i < prices.length; i++) {
        let nowP = prices[i];
        let tmrP = prices[i+1]
        if ((buyP == -1 && nowP < tmrP) || nowP < buyP) {
            buyP = nowP
        }
        if (buyP !== -1 && tmrP > buyP) {
            ans = Math.max(ans, tmrP - buyP)
        }
    }
    return ans
};

console.log(maxProfit([2,1,2,1,0,1,2]))