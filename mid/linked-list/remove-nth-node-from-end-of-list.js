// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
// 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个节点后，链表变为 1->2->3->5.

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 思路: 
// 1、递归遍历第一遍链表，获得总长度
// 2、获得目标定位 targetN = len - n
// 3、第二遍遍历前，链表前面新增 node0，因为 node = node.next 不会改变原链表，要修改 node.next 才能获得引用
// 4、第二遍遍历链表，每个 node 将 targetN - 1，直到目标前一个 node，将目标后的 node 进行拼接
var removeNthFromEnd = function(head, n) {
    let len = 0
    let redo = (node) => {
        len ++
        if (node.next == null) {
            return
        }
        redo(node.next)
    }
    redo(head)

    let targetN = len - n
    head = new ListNode(0, head);
    let redo2 = (node) => {
        if(targetN === 0) {
            node.next = node.next.next;
            return
        }
        targetN -= 1
        redo2(node.next)
    }
    redo2(head)
    head = head.next
    return head
};

// 思路：
// 1. 使用虚拟头部，从0开始，原函数位置即为1
// 2. 双指针，一快一慢，两个指针间隔 n+1
// 3. 当快指针到达最后，慢指针 slow 的位置就是目标删除位置的前一位
// 4. 执行 next = next.next
var removeNthFromEnd = function(head, n) {
    let Dhead = new ListNode(0)
    Dhead.next = head
    let fast = Dhead;
    let slow = Dhead;
    let fastStep = 0;
    while(fast.next !== null) {
        fast = fast.next;
        fastStep += 1
        if (fastStep >= n+1) {
            slow = slow.next
        }
    }
    slow.next = slow.next.next
    return Dhead.next
}

let head = new ListNode(1, 
    // new ListNode(2, 
    //     new ListNode(3, 
    //         new ListNode(4,
    //             new ListNode(5)
    //         ) 
    //     )
    // )
)

removeNthFromEnd(head, 1)