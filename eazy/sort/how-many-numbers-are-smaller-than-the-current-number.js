// 有多少小于当前数字的数字
// 给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。

// 输入：nums = [8,1,2,2,3]
// 输出：[4,0,1,1,3

// 思路: 
1、使用另一个数组存放值 val 与索引 index
2、将这个数组以 val 大小进行排序
3、遍历该排序后数组 data ，每个元素的 i 和 index (原顺序) 提供于答案数组
4、答案数组 ans 的第 index 位的值将是 i

var smallerNumbersThanCurrent = function(nums) {
    let data = [];
    for(let i = 0; i < nums.length; i++) {
        data.push({
            val: nums[i],
            index: i
        })
    }
    data.sort((a, b) => a.val - b.val)

    let ans = new Array(nums.length);
    for(let i = 0; i < data.length; i++) {
        if (i === 0) {
            ans[data[i].index] = 0
        } else 
        // 如果和前一个值相等，那么答案 index 的值也将等于前一个元素的 index 下的值
        if (data[i].val === data[i - 1].val) {
            ans[data[i].index] = ans[data[i - 1].index]
        } else {
            ans[data[i].index] = i
        }
    }
    return ans
};
