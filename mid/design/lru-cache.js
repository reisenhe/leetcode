// 146. LRU 缓存机制
// https://leetcode-cn.com/problems/lru-cache/

// 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
// 实现 LRUCache 类：

// LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

// 思路:
// 构建一个以哈希表存储的数据结构, 每个 key 存储着其对应的一个 双向链表节点
// 每次调用 get 或 put 函数, 就把对应 key 的节点挪至链表首位, 这可以保证新用的在前, 久不用的在后面
// 链表长度 (size) 超出 capacity 后, 直接切掉尾部, 因为它最少使用
// 链表需要一对 伪头部, 伪尾部 作标记界限, 可以在增加删除时回避相邻节点查询

// 双向链表构造函数
class DListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = {}                 // 初始化哈希表

    this.head = new DListNode()     // 初始化伪头部
    this.tail = new DListNode()     // 初始化伪尾部
    this.head.next = this.tail;     
    this.tail.prev = this.head;     // 连接头尾
    this.capacity = capacity;       // 设置最长限制
    this.size = 0;                  // 初始化长度
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // 如果哈希表无该 key, 返回 -1
    if (!this.cache[key]) {
        return -1
    }
    // 否则取出该 key 的节点, 移动至头部, 返回
    let node = this.cache[key]
    this.moveToHead(node)
    return node.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // 如果哈希表无该 key, 进入添加流程
    if (!this.cache[key]) {
        let node = new DListNode(key, value);   // 初始化节点 key -> value
        this.cache[key] = node                  // 哈希表标记节点
        this.addToHead(node)                    // 将节点添加至头部
        this.size += 1;                         // 长度 + 1
        // 如果长度超出限制, 移除尾部节点, 并删除哈希标记
        if (this.size > this.capacity) {
            let removedNode = this.removeTail();
            delete this.cache[removedNode.key]
            this.size -= 1
        }
    }
    // 否则, 从哈希表取出节点, 替换新 value, 将节点移植首位 
    else {
        node = this.cache[key]
        node.value = value;
        this.moveToHead(node)
    }
};
// 添加节点至首位
LRUCache.prototype.addToHead = function(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node
}
// 删除节点
LRUCache.prototype.removeNode = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
}
// 移动节点至首位
LRUCache.prototype.moveToHead = function(node) {
    this.removeNode(node);
    this.addToHead(node)
}
// 删除尾部节点，将节点返回
LRUCache.prototype.removeTail = function() {
    let node = this.tail.prev;
    this.removeNode(node)
    return node
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
let lRUCache = new LRUCache(2)
lRUCache.put(1, 1)
lRUCache.put(2, 2);
console.log(lRUCache)
console.log(lRUCache.cache[1])