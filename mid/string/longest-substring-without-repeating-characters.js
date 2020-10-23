// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 思路：
// 1、遍历字符串，逐字添加子字符
// 2、添加前判断是否存在相同字符，不存在则添加，并计算最大长度
// 3、如果存在，则把之前长度进行切割，从重复字符之后开始，继续拼接
// 4、因为切割过，所以新子串长度必定不如前一个 max ，所以只在成功拼接不重复字符时进行计算最大长度
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let sub = '';
    for(let i = 0; i < s.length; i++) {
        let onceIndex = sub.indexOf(s[i])
        if(onceIndex < 0) {
            sub += s[i]
            max = Math.max(max, sub.length)
        }else {
            sub = sub.slice(onceIndex + 1) + s[i]
        }
    }
    return max
};

lengthOfLongestSubstring("pwwkew") // 3
