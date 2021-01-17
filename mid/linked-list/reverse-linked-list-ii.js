// 92. 反转链表 II
// https://leetcode-cn.com/problems/reverse-linked-list-ii/
// 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

// 1 ≤ m ≤ n ≤ 链表长度。
// 输入: 1->2->3->4->5->NULL, m = 2, n = 4
// 输出: 1->4->3->2->5->NULL
function ListNode(val) {
    this.val = val;
    this.next = null;
} 

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// 思路：
// 1. 找到反转的前一个指针和反转开始的指针，记为 prevNode 与 startNode 
// 2. 使用第二个指针 curr，为它开始向后执行迭代反转函数
// 3. 反转指针指向 n 时 (index == n), 如果还有剩余尾部链表, 将其接在 startNode.next 上
// 4. 反转结束, 如果 m = 1, 代表链表从头开始遍历, 直接使用反转后的链表 head = prev, 并返回 head
// 5. 如果 m > 1, 将反转后的链表接在 prevNode.next 上, 因为 prevNode 也是指向 head 链表 m-1 位的指针, 所以直接返回 head
var reverseBetween = function(head, m, n) {
    if (m == n) {
        return head
    }
    let index = 1, node = head;
    while(index < m) {
        if (index < m - 1) {
            node = node.next
        }
        index++
    }
    let prevNode = node;
    let curr = m > 1 ? node.next : node;
    let prev = null;
    let startNode = curr;
    while(index <= n) {
        let temp = curr.next;
        if (index == n && temp !== null) {
            startNode.next = temp
        }
        curr.next = prev
        prev = curr
        curr = temp
        index++
    }
    if (m > 1) {
        prevNode.next = prev
    } else {
        head = prev
    }
    return head
};


let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)

console.log(reverseBetween(head, 1, 5))