// 给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

// J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。


// 思路：
// 1、循环J字符串制作一个JSON，每个字母对应为true
// 2、循环S字符串，匹配每个字符是否属于keyJ字符串，若属于则增加数量

// 这样可以只循环两次，也属于哈希存储法
var numJewelsInStones = function(J, S) {
    let keyJ = {}
    for(let i = 0; i < J.length; i++){
        const item = J[i]
        keyJ[item] = true
    }
    let count = 0;
    for(let i = 0; i < S.length; i++){
        const item = S[i]
        if(keyJ[item]) {
            count += 1
        }
    }
    return count
};