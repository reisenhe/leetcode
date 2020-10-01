// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

// 思路: 不会链表，抄答案

// 调试用链表数据
const l1 = {
  val: 1,
  next: {
    val: 2,
    next: { val: 4, next: null },
  },
};
const l2 = {
  val: 1,
  next: {
    val: 3,
    next: { val: 4, next: null },
  },
};
/**
 * @name 构造函数-构造链表
 * @param {*} val 初始化的值，可以不传，默认为 0
 * @param {*} next 初始化的下一个链表，可以不传，默认为 null
 */
const ListNode = function(val, next) {
  this.val = val || 0;
  this.next = next || null;
}

var mergeTwoLists = function (l1, l2) {
  // 初始化链表
  // 递归方法
  const recursion = (tempNode, l1, l2) => {
    // 列表都空了，结束递归
    if(!l1 && !l2) {
      return
    }
    // 列表有一个空了，补上另一个，结束递归
    if(!l1 || !l2) {
      tempNode.next = l1 || l2;
      return
    }
    tempNode.next = new ListNode()
    // tempNode = tempNode.next
    // 排序
    if (l1.val >= l2.val) {
      tempNode.next.val = l2.val;
      l2 = l2.next
    } else {
      tempNode.next.val = l1.val;
      l1 = l1.next
    }
    recursion(tempNode.next, l1, l2)
  }
  const newListNode = new ListNode()
  recursion(newListNode, l1, l2)
  return newListNode.next
}

let newList = mergeTwoLists(l1, l2)
console.log(newList)