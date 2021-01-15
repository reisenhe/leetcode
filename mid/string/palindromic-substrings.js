// 647. 回文子串
// https://leetcode-cn.com/problems/palindromic-substrings/

// 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。
// 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

// 输入："abc"
// 输出：3
// 解释：三个回文子串: "a", "b", "c"

// 输入："aaa"
// 输出：6
// 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"


思路：
// 1. 答案为 数组长度 (代表每个单独元素形成的1位回文串) + 长度大于 2 的回文串
// 2. 有回文串 s[i,j] 成立, 就有 s[i+1, i-1], 代表大回文串的内部也会是回文串
// 3. 遍历文字，将每个 s[i] 当成回文串的中心考虑，如果 s[i-1] == s[i+1]，说明中心点之外仍有回文串
// 4. 如果 s[i] == s[i-1]，考虑存在一个偶数回文串，否则继续以 3. 作奇数回文串判断
// 5. 如果存在 s[i-1] == s[i] == s[i+1], 说明在 4. 的前提下多出了一个奇数回文串，再次使用 s[i-1] == s[i+1] 判断
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let ans = 0;
    let doWhile = (h, j) => {
        // 存在回文串循环，ans ++
        while(h >= 0 && j < s.length && s[h] === s[j]) {
            ans += 1
            h--
            j++
        }
    }
    for (let i = 0; i < s.length; i++) {
        // 存在偶数回文串
        if (s[i] === s[i-1]) {
            doWhile(i-1, i)
            // 该中心点同时存在另一个奇数回文串
            if (s[i] === s[i+1]) {
                doWhile(i-1, i+1)
            }
        } else 
        // 奇数回文串
        if (s[i-1] === s[i+1]){
            doWhile(i-1, i+1)
        }
    }
    return ans += s.length
};

console.log(countSubstrings('aaaaa'))