// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
// 1 <= prices.length <= 3 * 10 ^ 4
// 0 <= prices[i] <= 10 ^ 4

// 思路：
// 1、初始化买入价为-1 (因为价格可能为0) ，当买入价为-1时表示未买入
// 2、循环价格表，如果未买入并且明天价格比今天高，则记入买入价
// 3、持续持有，如果已买入并且明天价格比今天低，则卖出，计算收益profit，重设买入价为-1
// 4、如果持续持有至倒数第二天，如果已买入，以最后一天价格卖出，计算收益
var maxProfit = function(prices) {
    let profit = 0;
    let buyP = -1;
    for(let i = 0; i < prices.length - 1; i ++) {
        let nowP = prices[i]
        let tmrP = prices[i + 1]
        if (buyP < 0 && nowP < tmrP) {
            buyP = nowP;
        }
        if (buyP > -1 && nowP > tmrP) {
            profit += nowP - buyP
            buyP = -1;
        }
        if (buyP > -1 && i+1 === prices.length - 1){
            profit += tmrP - buyP
            buyP = -1
        }
    }
    return profit
};
console.log(maxProfit([2,1,2,0,1]))

