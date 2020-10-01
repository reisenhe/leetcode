// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

var twoSum = function(nums, target) {
    // for (let i = 0; i < nums.length - 1; i++ ) {
    //     let numA = nums[i];
    //     let numB = target - numA;
    //     let bIndex = nums.findIndex(item => item == numB) 
    //     if (bIndex > 0 && bIndex !== i) {
    //         return [i, bIndex]
    //     }
    // }

    // 解法优化-第二轮循环时不循环前一个索引
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let numA = nums[i]
            let numB = nums[j]
            if (numA + numB == target) {
                return [i, j]
            }
        }
    }
    return false
};