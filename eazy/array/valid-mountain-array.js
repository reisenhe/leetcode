// 给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。

// 让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：

// A.length >= 3
// 在 0 < i < A.length - 1 条件下，存在 i 使得：
//     A[0] < A[1] < ... A[i-1] < A[i]
//     A[i] > A[i+1] > ... > A[A.length - 1]

var validMountainArray = function(A) {
    // 首先排除 长度小于 3
    if (A.length < 3) {
        return false
    }
    let ans = true;
    let goUp = true;    // 设置上坡 flag
    for (let i = 1; i < A.length; i++) {
        // 排除前后相等，返回 false
        if (A[i] === A[i - 1]) {
            ans = false;
            break
        }
        // 下坡判断
        if (goUp && A[i] < A[i - 1]) {
            // 如果从最开始就下坡，说明根本没有上坡，返回 false
            if (i === 1) {
                ans = false
                break
            }
            // 改变状态为下坡 
            else {
                goUp = false;
            }
        }
        // 在下坡时遇到上坡，返回 false
        if (!goUp && A[i] > A[i - 1]) {
            ans = false
            break
        }
        // 直到最后一个数字都是在上坡，没有下坡，返回 false
        if (i === A.length - 1 && goUp) {
            ans = false
            break
        }
    }
    return ans
};