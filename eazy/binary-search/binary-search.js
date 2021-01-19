// 704. 二分查找
// https://leetcode-cn.com/problems/binary-search/
// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

// 输入: nums = [-1,0,3,5,9,12], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 思路：
// 1. 设置左右两个指针，一头一尾
// 2. 设置中间指针 mid
// 3. 以 left <= right 创立循环
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2)
        if (nums[mid] === target) {
            return mid
        }
        if (target < nums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
};

// let nums = [1 ,2, 8, 9, 6, 19, 99, 12]
let target = 6
