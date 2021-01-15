// 接雨水
// https://leetcode-cn.com/problems/trapping-rain-water/

// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 

var trap = function(height) {
    // let ans = 0;
    // let length = height.length
    // for (let i = 0; i< length; i++) {
    //     // 循环，每个值查找左右最高点，取其最低点与当前值的差即可获得雨水量
    //     let maxLeft = 0; 
    //     let maxRight = 0;
    //     // 循环查找左侧最高点
    //     for (let j = i; j >= 0; j--) {
    //         maxLeft = Math.max(maxLeft, height[j])
    //     }
    //     // 循环查找右侧最高点
    //     for (let j = i; j < length; j++) {
    //         maxRight = Math.max(maxRight, height[j])
    //     }
    //     ans += Math.min(maxLeft, maxRight) - height[i]
    // }
    // return ans

    // 优化解法 - 以扫描形式依次存储左序最大值和右序最大值, 
    // 数组数据将以阶梯状存在, 每个位置 (index) 的值都是当前值匹配的左向最大值或右向最大值
    // 取左右最大值的 min, 减去当前值, 累加获得雨水量
    if (height == null || height.length === 0) {
        return 0
    }
    let ans = 0;
    let length = height.length;
    let leftMaxArr = []
    let rightMaxArr = []
    leftMaxArr[0] = height[0]                       // 设置左 max 列表第一个值
    rightMaxArr[length - 1] = height[length - 1]    // 设置右 max 列表最后一个值

    // 正向循环, 以当前和前一个值取 max, 完成左 max 列表构建
    for (let i = 1; i < length; i++) {
        leftMaxArr[i] = Math.max(height[i], leftMaxArr[i-1])
    }
    // 逆向循环, 以当前和后一个值取 max, 完成右 max 列表构建
    for (let i = length - 2; i >= 0; i--) {
        rightMaxArr[i] = Math.max(height[i], rightMaxArr[i+1])
    }
    // 再次循环, 每个点上的左右 max 的最小值, 与当前值的差, 即当前位置可接的水量
    for (let i = 0; i < length; i++) {
        ans += Math.min(leftMaxArr[i], rightMaxArr[i]) - height[i]
    }
    return ans
};