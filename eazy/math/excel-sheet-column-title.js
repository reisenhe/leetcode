// 168. Excel表列名称
// https://leetcode-cn.com/problems/excel-sheet-column-title/
// 给定一个正整数，返回它在 Excel 表中相对应的列名称。
// 输入: 1
// 输出: "A"
// 输入: 28
// 输出: "AB"

/**
 * @param {number} n
 * @return {string}
 */
// 思路：
// 1. 首先要让输入 26 时能返回 'z', 'z' 在字符串第 25 位，所以 n = n-1
// 2. 使用求余数获取剩余的值 less
// 3. 使用除法判断是否存在大于 26 的倍数 times，如果存在，说明前面有值，记作 beforeLetter
// 4. 如果 times 仍然大于 26，递归调用，获取进一步的 beforeLetter，否则直接使用 times-1

let letters = 'abcdefghijklmnopqrstuvwxyz'
var convertToTitle = function(n) {
    n = n - 1
    let times = Math.floor(n / 26)
    let less = n % 26
    let ans = letters[less]
    if (times > 0) {
        let beforeLetter = times >= 26 ? convertToTitle(times) : letters[times-1]
        ans = beforeLetter + ans
    }
    return ans.toUpperCase()
};

// 迭代法：
// 1. 使用 while 循环，以 n > 0 作条件 
// 2. 每轮开始使用 n--，取值思路和上一段一致，使用求余数获取当前值
// 3. 使用除法求剩余值，并赋值于 n
let convert2 = function(n) {
    let arr = []
    while(n > 0) {
        n--
        arr.unshift(letters[n % 26])
        let times = Math.floor(n / 26)
        n = times
    }
    return arr.join('').toUpperCase()
}

let n = 26*27+1
console.log(convert2(n))
