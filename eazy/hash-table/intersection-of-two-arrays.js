// 给定两个数组，编写一个函数来计算它们的交集。
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]

// 思路：
// 1、获得第一个数组的哈希表
// 2、遍历第二个数组，检查哈希表，标记出现的数字
// 3、遍历哈希表，输出答案数组
var intersection = function(nums1, nums2) {
    let numObj = {}
    let ans = []
    for (let i = 0; i < nums1.length; i++) {
        if (numObj[nums1[i]] === undefined) {
            numObj[nums1[i]] = 0
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (numObj[nums2[i]] !== undefined) {
            numObj[nums2[i]] = 1
        }
    }

    for (let i in numObj) {
        if (numObj[i]) {
            ans.push(Number(i))
        }
    }

    return ans
};