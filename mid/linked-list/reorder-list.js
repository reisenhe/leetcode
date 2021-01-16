// 143. 重排链表
// https://leetcode-cn.com/problems/reorder-list/
// 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
// 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
// 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

思路：
// 1. 使用快慢指针定位中点，这个位置将成为末尾
// 2. 将中点开始的链表进行反转 3->4->5 转 5->4->3
// 3. 提供合并链表函数，合并 1->2->3 与 5->4->3
var reorderList = function(head) {
    let mid = head, tail = head
    while(tail !== null && tail.next !== null) {
        mid = mid.next
        tail = tail.next.next
    }
    mid = reverseLink(mid)
    // 合并函数，传入当前节点与想合并的下一节点
    const combine = (node, elseNext) => {
        // 4. 直至最后一个节点，最终节点总会指向 null，所以不用担心合并时最末尾重复问题
        if (node == null || node.next == null) {
            return
        }
        // 1. 存储当前节点的 next
        let temp = node.next
        // 2. 当前节点的 next 指向目标的节点
        node.next = elseNext;
        // 3. 下一个节点与储存的原节点 next 重复同样的操作
        combine(node.next, temp)
    }
    combine(head, mid)
};

let reverseLink = function(node) {
    let prev = null
    let curr = node
    while(curr !== null) {
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    return prev
}

let head = new ListNode(1, 
    new ListNode(2, 
        new ListNode(3, 
            new ListNode(4,
                new ListNode(5)
            ) 
        )
    )
)
reorderList(head)