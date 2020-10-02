// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 注意：给定 n 是一个正整数。

// 思路：
// 走向台阶5
// 台阶4走法+1步 或 台阶3走法+2步 于是走向台阶5的走法 = 台阶4走法+台阶3走法
// 走向台阶4
// 台阶3走法+1步 或 台阶2走法+2步 于是走向台阶4的走法 = 台阶3走法+台阶2走法
// 所以从台阶3开始，n台阶走法 = (n-1)走法+(n-2)走法

// 设计循环：
// 1、设置前一阶走法preStep，当前阶走法footCount；
// 2、初始化第0阶走法为0、第1阶走法为1
// 3、每阶走法总计为nowStep = preStep + footCount
// 4、算出新走法后，footCount原来的数值成为前一阶走法，赋值于preStep，nowStep赋值于footCount

var climbStairs = function(n) {
    let preStep = 0;
    let footCount = 1;

    for(let i = 0; i < n; i++) {
        let nowStep = preStep + footCount
        preStep = footCount;
        footCount = nowStep
    }
    return footCount;
};

console.log(climbStairs(5))

