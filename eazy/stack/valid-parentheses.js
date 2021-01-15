// 20. 有效的括号
// https://leetcode-cn.com/problems/valid-parentheses/
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 思路：看答案
// 1、首先排除字符串长度不为偶数的情况
// 2、创建以右括号为索引的json表、创建栈数组stack
// 3、循环以空字符串对字符串s进行分隔开的数组
// 4、如果该字符串为左括号，入栈stack
// 5、如果该字符为右括号：
//     5.1、如果stack为空或stack最后一个不是对应的左括号，返回false
//     5.2、排除以上条件则完成一次闭合，stack数组执行pop，出栈
// 6、判断stack是否为空，若完全出栈则完成所有闭合括号
var isValid = function(s) {
    if(s.length & 2 === 1) {
        return false
    }
    let prtheses = {
        '}': '{',
        ')': '(',
        ']': '['
    }
    let stack = []
    for (let i in s.split('')) {
        let word = s[i];
        if(!prtheses[word]) {
            stack.push(word)
        }else {
            if(!stack.length || stack[stack.length - 1] !== prtheses[word]) {
                return false
            }
            stack.pop()
        }
    }
    return !stack.length
};