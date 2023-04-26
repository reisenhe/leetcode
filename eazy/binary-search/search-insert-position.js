// 35. 搜索插入位置

/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

 

示例 1:

输入: nums = [1,3,5,6], target = 5
输出: 2
示例 2:

输入: nums = [1,3,5,6], target = 2
输出: 1
示例 3:

输入: nums = [1,3,5,6], target = 7
输出: 4
 

提示:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 为 无重复元素 的 升序 排列数组
-104 <= target <= 104

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/search-insert-position
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * 遍历，并逐渐寻找最佳位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (item < target) {
      result = i + 1
    } else if (item === target) {
      result = i;
      break
    }
  }
  return result
};

/**
 * 二分查找，设置一个 left、right，并在循环中使用 mid 去比对 target
 * 代码很容易看懂吧？加油啊未来的我！
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert2 = function (nums, target) {
  if (target <= nums[0]) return 0
  let left = 0;
  let right = nums.length - 1;
  if (target > nums[right]) return nums.length
  while (left !== right) {
    let mid = left + Math.floor((right - left) / 2)
    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid
    } else {
      return mid;
    }
  }
  return left
};