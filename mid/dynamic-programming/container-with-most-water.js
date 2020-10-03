// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器，且 n 的值至少为 2。

// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49

// 思路：抄答案
// 1、使用双指针分别从起点和末尾进行容积统计
// 2、每次移动的都是两个指针中较小的一方，因为它不再值得成为容器边界了
// 3、在最开始算出起至末容器的容积，以此作为 ans 初始值，之后每次移动指针完成的容积 area 都与其对比最大值
// 4、移动至左右边界重合即可
var maxArea = function(height) {
    let lIndex = 0; 
    let rIndex = height.length - 1;
    let ans = 0
    while(lIndex <= rIndex) {
        let area = Math.min(height[lIndex], height[rIndex]) * (rIndex - lIndex)
        ans = Math.max(area, ans);
        if (height[lIndex] < height[rIndex]) {
            lIndex++
        } else {
            rIndex--
        }
    }
    return ans
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))