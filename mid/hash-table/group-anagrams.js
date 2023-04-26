// 49. 字母异位词分组

/**
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

 

示例 1:

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
示例 2:

输入: strs = [""]
输出: [[""]]
示例 3:

输入: strs = ["a"]
输出: [["a"]]
 

提示：

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] 仅包含小写字母

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/group-anagrams
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * 首先字母数组支持排序，排完以后就可以找是否存在了
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  strs.forEach(str => {
    let array = Array.from(str);
    array.sort();
    let key = array.toString();
    let list = map.get(key) || [];
    list.push(str);
    map.set(key, list)
  })
  return Array.from(map.values());
};

/**
 * 使用 一个26位数组，并使用 charCodeAt 获取每个字符的编码，并与 'a' 字符计算出结果，并将此位数数组记为 哈希表的 key
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams2 = function (strs) {
  const map = new Map();
  strs.forEach(str => {
    const charKeyArr = new Array(26).fill(0);
    Array.from(str).forEach(c => {
      charKeyArr[c.charCodeAt() - 'a'.charCodeAt()]++
    })
    let list = map.get(charKeyArr.toString()) || [];
    list.push(str);
    map.set(charKeyArr.toString(), list);
  })
  return Array.from(map.values());
};