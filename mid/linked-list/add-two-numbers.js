// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

const ListNode = function(val, next) {
    this.val = val || 0;
    this.next = next || null;
}

// 思路：
// 1、首先考虑相加以后进位问题，因为是相加，所以最多只会出现进1位的情况
// 2、设计递归时，可以在进位时 (l1.val + l2.val + ans.val >= 10) 直接将 ans.next.val 由 0 改为 1
// 3、递归在 l1、l2 都为空时结束，因为没有下一位了，ans.next 也要清空成 null
// 4、如果 l1、l2 其中有一个还未空，则考虑两种边际情况
// 4.1、在 (2、) 计算未发生进位时，直接将剩余的链表 temp 拼接为 ans.next 即可
// 4.2、在 (2、) 计算产生了进位，此时 ans.next 为只有 1 位的链表，为 ans.next 与剩余链表 temp 递归调用整个相加方法，即可保证之后进位的准确性

var addTwoNumbers = function(l1, l2) {
    let ans = new ListNode()
    let recursion = (ans, l1, l2) => {
        ans.next = new ListNode()
        let sum = l1.val + l2.val + ans.val
        if (sum >= 10) {
            ans.next.val = 1
            ans.val = sum - 10
        } else {
            ans.val = sum
        }
        l1 = l1.next;
        l2 = l2.next;
        if(!l1 && !l2) {
            // 链表都空了，结束递归
            ans.next = ans.next.val ? ans.next : null
            return
        }
        // 链表有一个空了
        if(!l1 || !l2){
            let temp = l1 || l2;
            if(ans.next.val === 0) {
                // 如果没有进位，拼接，结束递归
                ans.next = temp
            } else {
                // 如果有进位，调用加法
                ans.next = addTwoNumbers(ans.next, temp)
            }
            return
        }
        recursion(ans.next, l1, l2)
    }
    recursion(ans, l1, l2)
    return ans
};

let l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))))
let l2 = new ListNode(9, new ListNode(9, new ListNode(9)))

console.log(addTwoNumbers(l1,l2))