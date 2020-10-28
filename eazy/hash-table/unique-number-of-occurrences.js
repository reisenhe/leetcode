// 给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。
// 如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。

// 输入：arr = [1,2,2,1,1,3]
// 输出：true
// 解释：在该数组中，1 出现了 3 次，2 出现了 2 次，3 只出现了 1 次。没有两个数的出现次数相同。

// 思路:
// 1、创建哈希表 times，遍历列表，记录出现次数
// 2、创建第二个哈希表 nums，遍历 times，以 times[i] 为键，记录已出现
// 3、如果出现重复，返回 false，否则返回 true
var uniqueOccurrences = function(arr) {
    let times = {}
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i]
        times[n] = times[n] || 0
        times[n] += 1
    }
    let flag = true
    let nums = {}
    for (let i in times) {
        if (nums[times[i]]) {
            flag = false
            break
        }
        nums[times[i]] = true
    }
    return flag
};