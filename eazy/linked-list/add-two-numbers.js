// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

const ListNode = function(val, next) {
    this.val = val || 0;
    this.next = next || null;
}

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
                return
            }
            // 如果有进位，调用加法
            ans.next = addTwoNumbers(ans.next, temp)
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