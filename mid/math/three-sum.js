// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// 思路：看答案
// 1、首先将数组从低到高排序
// 2、以 a 的值为第一重循环，在循环中使用双指针分别查询 b 与 c 的值
// 3、a、b、c 的索引分别记为 i1、i2、i3
// 4、排序后的数组, 在确认 a 时, 以遍历 b 为第二重循环
// 5、在保证 b 在 c 的左侧的前提下, 计算 b + c = -a
// 6、如果 b + c > -a, 则将 c 往左挪, 直到 b 与 c 重合为止

var threeSum = function(nums) {
    let len = nums.length
    let ans = []

    nums.sort((a, b) => a - b);
    // 遍历 a
    for (let i1 = 0; i1 < len; i1++) {
        // 如果与上一个值相同，要跳过，避免重复
        if (i1 > 0 && nums[i1] === nums[i1 - 1]) {
            continue
        }
        // c 的指针从右端开始
        let i3 = len - 1;
        // 这是要满足的条件 b + c = -a
        let target = - nums[i1]
        // 遍历 b , 从当前 a 索引的下一个值开始
        for (let i2 = i1 + 1; i2 < len; i2 ++) {
            // 与 a 类似, 避免和上一个值相同
            if (i2 > i1 + 1 && nums[i2] === nums[i2 - 1]) {
                continue
            }
            // 在保证 b 指针在 c 指针的左侧时, 两数和大, 则将 c 指针向左挪
            while (i2 < i3 && nums[i2] + nums[i3] > target) {
                i3--
            }
            // 如果 b 与 c 重合, 说明已经没有可用的组合了, 结束 c 遍历
            if (i2 === i3) {
                break
            }
            // 这是符合的组合条件
            if (nums[i2] + nums[i3] === target) {
                let list = [
                    nums[i1],
                    nums[i2],
                    nums[i3]
                ]
                ans.push(list)
            }
        }
    }

    return ans
};