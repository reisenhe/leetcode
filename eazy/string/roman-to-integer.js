// 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

let romStr = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}
// 思路：解法1
// 除了设定单个字符的数值json，增加设定一个特殊双字符数值的json。
// 遍历字符串，如果存在特殊双字符，则取该值计算并将索引+1
let spcStr = {
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900,
}
var romanToInt = function(s) {
    if(romStr[s]) {
        return romStr[s]
    }
    if(spcStr[s]) {
        return spcStr[s]
    }
    let num = 0
    for(let i = 0; i < s.length; i++) {
        let spcNum = spcStr[s[i]+s[i+1]];
        if(i < s.length - 1 && spcNum) {
            num += spcNum
            i++
        } else {
            num += romStr[s[i]]
        }
    }
    return num
}

// 思路：解法2
// 因为前一个字符比后一个字符小的情况只会出现在表示 str[i+1] - str[i] 数值的时候，所以可以判断出现该情况时使用减法
// 对比解法1：
// 少存一个json，内存占用下降了
var romanToInt2 = function(s) {
    if(romStr[s]) {
        return romStr[s]
    }
    let num = 0
    for(let i = 0; i < s.length; i++) {
        if(romStr[s[i]] < romStr[s[i+1]]) {
            num -= romStr[s[i]]
        } else {
            num += romStr[s[i]]
        }
    }
    return num
}

console.log(romanToInt("III"))