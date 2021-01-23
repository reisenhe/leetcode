// https://leetcode-cn.com/problems/maximum-subarray/
// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 输入: [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

// 思路：看答案
// 1、使用pre存放前一个连续和，maxAns存放最大和
var maxSubArray = function(nums) {
    let pre = 0; let maxAns = nums[0];
    nums.forEach(x => {
        pre = Math.max(pre + x, x)
        maxAns = Math.max(maxAns, pre)
    })
    return maxAns
};

let arr = [-2,1,-3,4,-1,2,1,-5,4]
maxSubArray(arr)
// 遍历数组
// 第0轮：
// pre = -2; maxAns = -2
// 第1轮：
// -2 + 1 < 1; pre = 1;
// -2 < 1; maxAns = 1
// 第2轮：
// 1 + -3 > -3; pre = -2;
// 1 > -2; maxAns = 1;
// 第3轮：
// -2 + 4 < 4; pre = 4
// 4 > 1; maxAns = 4;
// 第4轮：
// 4 + -1 > -1; pre = 3;
// 4 > 3; maxAns = 4;
// 第5轮：
// 3 + 2 > 2; pre = 5;
// 4 < 5; maxAns = 5;
// 第6轮：
// 5 + 1 > 1; pre = 6;
// 5 < 6; maxAns = 6;
// 第7轮：
// 6 + -5 > -5; pre = 1;
// 6 > 1; maxAns = 6;
// 第8轮：
// 1 + 4 > 4; pre = 5;
// 6 > 5; maxAns = 6

// (pre+x) 与 (x) 之间取最大值，可以判断出是继续累加还是以 (x) 为起点另起一段
// 在上面例子的遍历中：pre分别在第1轮、第3轮更新过累加起点 —— 当累加数值小于当前数值时，以当前数值为新的累加起点

// 而每次将累加结果 (pre) 与上一次最大累加结果 (maxAns) 作对比，可以得出是否更新已取得的最大累加值
// 除了第0轮，最大累加结果在第1轮、第3轮、第5轮、第6轮更新过，而之后都不再更新，
// 这也是要求出的最大值

