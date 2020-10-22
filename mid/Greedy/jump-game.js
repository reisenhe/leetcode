// 给定一个非负整数数组，你最初位于数组的第一个位置。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个位置。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 思路：
// 1、遍历数组，维护一个最大可到达步数 mostStep，在循环中每次对它进行更新
// 2、每个元素的最大步数记为 nowStep = i + nums[i]，mostStep 将以它作对比判断是否更新
// 3、判断最大步数可以达到最后的位置时，返回 true
var canJump = function(nums) {
    let n = nums.length;
    let mostStep = 0;
    for(let i = 0; i < n; i++) {
        if (i <= mostStep) {
            let nowStep = i + nums[i]
            mostStep = Math.max(nowStep, mostStep);
            if(mostStep >= n-1) {
                return true
            }
        }
    }
    return false
};

canJump([2,3,1,1,4]) // true
canJump([3,2,1,0,4]) // false
