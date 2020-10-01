// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 思路：负数都不是；转为字符串，转数组后反转比对
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    let strX = x + '';
    let revX = strX.split('').reverse().join('')

    return strX === revX
};