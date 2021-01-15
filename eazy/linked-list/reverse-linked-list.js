// 206. 反转链表
// https://leetcode-cn.com/problems/reverse-linked-list/

// 反转一个单链表。
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
// 思路
// 1. 边界情况，head 不存在或长度为1，直接返回。
// 2. 创建递归 redo，接收新链表 newListNode 与旧链表 node
// 3. redo 中创建 val = node.val 的新 node，并将 node.next = newListNode
// 4. 递归调用，将旧链表的 next 传入
// 5. 新建 node.val = head.val, 将其与 head.next 传入递归方法

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || head.next == null) {
        return head
    }
    const redo = (newListNode, node) => {
        if (node == null) {
            return newListNode
        }
        let tempNode = new ListNode(node.val)
        tempNode.next = newListNode
        return redo(tempNode, node.next)
    }
    let newNode = new ListNode(head.val)
    let ans = redo(newNode, head.next)
    return ans
};

// 迭代法
// 1. 使用临时节点存储下一个节点 tempNode = node.next 
// 2. 将下一个节点设置为 prev
// 3. 使用 prev 维护一个未完成反转的剩余节点，它在一轮 while 中存储 node;
// 4. 存储后，node 将被赋值为 node.next
// prev = [1] curr = [2,3,4,5]
// 5. 进入下一轮 while, 存储 node.next, 替换 node.next = prev, prev = node
// prev = [2,1] curr = [3,4,5]

var reverseList2 = function(head) {
    let prev = null
    let curr = head
    while(curr !== null) {
        let tempNode = curr.next
        curr.next = prev
        prev = curr
        curr = tempNode
    }
    return prev
}

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
// console.log(head)
let revHead = reverseList2(head)
console.log(revHead)