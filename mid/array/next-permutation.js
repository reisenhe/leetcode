// 31. 下一个排列
// https://leetcode-cn.com/problems/next-permutation/

// 实现获取 下一个排列 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
// 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

// 意思就是拼接后的数字要变成刚好比原数字大的程度
// 如果已经是最大数字, 那就返回升序

// 输入：nums = [1,2,3]
// 输出：[1,3,2]
// 输入：nums = [3,2,1]
// 输出：[1,2,3]
// 输入：nums = [1,1,5]
// 输出：[1,5,1]
// 输入：nums = [1,4,6,5]
// 输出：[1,5,6,4]


// 思路: 两遍扫描
// 1. 第一遍, 从后往前, 找出第一个 nums[i] < nums[i+1] 的数字, 所以用 nums[i] >= nums[i+1] 决定扫描继续
// 2. 第二遍, 从后往前, 找出第一个刚好 nums[j] > nums[i] 的数字
// 3. 替换两个位置的数字
// 4. 将新的数组从 i+1 位置开始做前后反转, 让更小的数字排在前面紧跟 i
var nextPermutation = function(nums) {
    let length = nums.length
    let i = length - 2;
    while(i >= 0 && nums[i] >= nums[i+1]) {
        i--
    }
    if (i >= 0) {
        j = length - 1;
        while(j >=0 && nums[i] >= nums[j]) {
            j--
        }
        swap(nums, i, j)
    }
    reverse(nums, i+1)
};
let swap = (nums, i, j) => {
    let num = nums[i]
    nums[i] = nums[j]
    nums[j] = num
}
let reverse = (nums, start) => {
    let left = start,
        right = nums.length - 1;
    while(left < right) {
        swap(nums, left, right)
        left++
        right--
    }
}