// 160. 相交链表
/**
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
 * 
 * 
 * 输入[4,1,8,4,5], [5,6,1,8,4,5]
 * 输出 8
 */


/**
 * 哈希表解法:
 * 走一遍链表A，存入各个内存地址
 * 走一遍链表B，检测是否已被记录
 * 如果有，返回结果
 * 没有返回 null
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let hasSet = new Set();
  let temp = headA;
  while (temp !== null) {
    hasSet.add(temp);
    temp = temp.next
  }
  temp = headB;
  let result = null;
  while (!result && temp !== null) {
    if (hasSet.has(temp)) result = temp;
    temp = temp.next;
  }
  return result
};


/** 
 * 双指针解法：
 * 两个指针同步前进，结束的指针指向对方链表，如果有相交将会同步获取
 * 
 * 函数运行后，表1出发的指针会走 5 + 3 步到达表2的 8，表2出发的指针会走 6 + 2 步到达表1的8
 * 两个同时出发的指针的路程为 
 * 指针1：[4,1,8,4,5][5,6,1,=>8,4,5]
 * 指针2：[5,6,1,8,4,5][4,1,=>8,4,5]
 * 
 * 两个指针步程一致，如果全程没有找到相交，它们会在最后命中对方的 null，也满足 null === null 的判断跳出循环返回结果
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode2 = function (headA, headB) {
  if (headA === null || headB === null) return null;
  let tempA = headA; let tempB = headB;
  while (tempA !== tempB) {
    tempA = tempA === null ? headB : tempA.next;
    tempB = tempB === null ? headA : tempB.next;
  }
  return tempA
};