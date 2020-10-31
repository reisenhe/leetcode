// 设计一个支持在平均 时间复杂度 O(1) 下， 执行以下操作的数据结构。
// 注意: 允许出现重复元素。
// insert(val)：向集合中插入元素 val。
// remove(val)：当 val 存在时，从集合中移除一个 val。
// getRandom：从现有集合中随机获取一个元素。每个元素被返回的概率应该与其在集合中的数量呈线性相关。

// 思路：
// 1、数组插入
// 2、随机数 * 数组长度取整，即可获得该数组随机index，每个重复元素出现概率和对应index出现概率相同
var RandomizedCollection = function() {
    this.data = []
};
RandomizedCollection.prototype.insert = function(val) {
    let hadNot = this.data.indexOf(val) < 0
    this.data.push(val)
    return hadNot
};
RandomizedCollection.prototype.remove = function(val) {
    let index = this.data.indexOf(val)
    if (index < 0) {
        return false
    } else {
        this.data.splice(index, 1)
        return true
    }
};
RandomizedCollection.prototype.getRandom = function() {
    let index = Math.random() * this.data.length | 0;
    return this.data[index]
};