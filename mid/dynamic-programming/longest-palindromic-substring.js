// 5. 最长回文子串
// https://leetcode-cn.com/problems/longest-palindromic-substring/
// 给你一个字符串 s，找到 s 中最长的回文子串。

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。

// 思路：
// 使用动态规划，如果一个 s 是回文串， 那么它去掉头尾也是回文串，有方程 s[i, j] = s[i+1, j-1]
// 使用二维数组存储 i 与 j 的状态，写作 dp[i][j]
// 得状态转移方程 dp[i][j] = s[i] == s[j] && dp[i+1, j-1]
// 边界条件为当子串长度为 2 或 3 时，若仅剩 3 个字符，判断首尾即可，所以边界为 j - i < 3
// 初始化对角线值 dp[i][i] = true; 此位置仅有 1 个字符，必定为 true 
// 为每个位置记录 dp[i][j] = s[i] === s[j] && (j - i < 3 || dp[i+1][j-1])
// dp[i+1][j-1] 在表中将位于 dp[i][j] 的左下角，表将以列为循环从左向又填写，所以当 j - i >= 3 时，这个位置都可被判断出来  
// 填表后截取 

// 例如 'bababc', 行为 i，列为 j，每个元素代表 s[i] === s[j] 的判断结果
// [
//     [true, false, true,  false, true,  false]
//     ['  ', true,  false, true,  false, false]
//     ['  ', '  ',  true,  false, true,  false]
//     ['  ', '  ',  '  ',  true,  false, false]
//     ['  ', '  ',  '  ',  '  ',  true,  false]
//     ['  ', '  ',  '  ',  '  ',  '  ',  true]
// ]

var longestPalindrome = function(s) {
    let len = s.length;
    if (len < 2) {
        return s
    }
    let maxLen = 1;
    let begin = 0;
    let dp = new Array(len).fill('').map(item => new Array(len).fill(false))
    let ans = ''
    for (let i = 0; i< len; i++) {
        ((i) => {dp[i][i] = true})(i)
    }
    // 以列 j 作循环，行 i 循环至该列长度 ( 至 j - 1 )即可 
    for (let j = 1; j < len; j++) {
        for (let i = 0; i < j; i++) {
            if (s[i] !== s[j]) {
                dp[i][j] = false
            } else {
                if (j - i < 3) {
                    dp[i][j] = true
                } else {
                    dp[i][j] = dp[i+1][j-1]
                }
            }
            // 判断 dp[i][j] = true，记录下 i 与长度 
            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                begin = i
            }
        }
    }
    ans = s.slice(begin, begin + maxLen)
    return ans
};

console.log(longestPalindrome('babab'))

