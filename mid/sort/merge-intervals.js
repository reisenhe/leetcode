// 给出一个区间的集合，请合并所有重叠的区间。
// 输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出: [[1,6],[8,10],[15,18]]
// 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

// 思路：
// 1、先将数组以左边界 x[0] 从小到大正序排序
// 2、遍历检查数组第一个元素，如果 [i][1] < [i+1][0]，说明不与第二个元素区间重叠，取出
// 3、如果 [i][1] >= [i+1][0]，说明重叠，合并区间
// 4、合并方法：新区间左边界为 [i][0]，右边界为两个区间取最大值，因为存在前一个比后一个 [1] 要大的清情况
// 5、最后 intervals 将只剩一个区间，将它与答案合并 
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let ans = []
    let i = 0;
    while (intervals.length > 1) {
        if (intervals[i][1] < intervals[i + 1][0]) {
            ans.push(intervals.shift())
        } else {
            intervals[i + 1][0] = intervals[i][0]
            intervals[i + 1][1] = Math.max(intervals[i + 1][1], intervals[i][1]) 
            intervals.shift()
        }
    }
    ans = ans.concat(intervals)
    return ans
};
let intervals1 = [[1,3],[2,6],[8,10],[15,18]]
let intervals2 = [[1,4],[4,5]]
let intervals3 = [[1,4],[2,3]]

console.log(merge(intervals3))