// 93. 复原IP地址
// https://leetcode-cn.com/problems/restore-ip-addresses/

// 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
// 有效的 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效的 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效的 IP 地址。

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let size = s.length;
    if (size < 4 || size > 12) {
        return []
    }
    let ans = []
    let segments = []
    let dfs = (segId, segStart) => {
        // 如果完成了4段参数
        if (segId === 4) {
            // 遍历至最后一位，且，代表组合成功，添加答案 ans
            if (segStart === s.length) {
                ans.push(segments.join('.'))
            }
            // 否则不添加答案，不管如何都结束该次遍历
            return
        }
        // 如果未完成4段参数，但遍历至最后一位，结束该次遍历
        if (segStart === size) {
            return
        }
        // 如果该位数为 0，由于不能有先导 0，每位 0 只能单独存在，所以设置该段，进入下一段查找
        if (s[segStart] === '0') {
            segments[segId] = 0;
            dfs(segId+1, segStart+1)
        }

        // addr 代表当前段的数值
        let addr = 0;
        for (let i = segStart; i < s.length; i++) {
            addr = addr*10 + Number(s[i])   // 十位数 + 个位数
            // 满足大于 0 且 小于等于 255 的条件，放置该位，进入下一段查找
            if (addr > 0 && addr <= 255) {
                segments[segId] = addr
                dfs(segId+1, i+1)
            } else {
                // 数字条件不满足，停止该次继续遍历
                break
            }
        }
    }
    dfs(0, 0)
    return ans
};
let s = "25525511135"
console.log(restoreIpAddresses(s))