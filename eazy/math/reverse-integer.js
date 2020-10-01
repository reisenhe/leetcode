// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0


// 思路：转为字符串后使用Array.reverse()接着拼接回字符串，最后通过比大小判断输出想要的数值
var reverse = function(x) {
    let isMinus = x < 0;
    let strX = Math.abs(x).toString();
    let revX = strX.split('').reverse().join('')
    let numX = Number(revX);
    let limit = Math.pow(2, 31);
    if (isMinus && -numX >= -limit) {
        return -numX
    }
    if (numX <= (limit -1)){
        return numX
    }
    return 0
};