// 给定一个非负整数数组，你最初位于数组的第一个位置。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个位置。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let n = nums.length;
    let mostStep = 0;
    for(let i = 0; i < n; i++) {
        if (i <= mostStep) {
            mostStep = Math.max(i + nums[i], mostStep);
            if(mostStep >= n-1) {
                return true
            }
        }
    }
    return false
};
