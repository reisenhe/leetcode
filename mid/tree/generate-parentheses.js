// 22. 括号生成

https://leetcode.cn/problems/generate-parentheses/
/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"]
 

提示：

1 <= n <= 8
 */

/**
 * 递归过程中，右括号必须保持数量大于等于剩余的左括号，也就是说如果剩余数量相同，下一个字符只能添加左括号
 * 树状分支递归
 *                   ''                 // l3, r3
                    / \
                   (   )x               // (l2, r3) (l3, r2x)  '(' | ')x' 剪掉右边
                  / \
                 /   \
                /     \
               /       \
              /         \
             (           )              // (l1, r3) (l2, r2) ok '((' | '()'
            / \         / \
           /   \       /   \
          (     )     (     )x          // (l0, r3) (l1, r2) (l1, r2) (l2, r1x) '(((' | '(()' | '()(' | '())x' 剪掉最右
           \   / \   / \ 
            ) (   )（   )               // (l0, r2) (l0, r2) (l1, r1) (l0, r2) (l1, r1)  '((()' | '(()(' | '(())' | '()((' | '()()'


不画了，聪明的我一定能看得出这样下去的答案是 '((()))' | '(()())' | '(())()' | '()(())' | '()()()'

 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (!n) return []
  let result = [];
  function generator(str, left, right) {
    if (left === 0 && right === 0) {
      result.push(str);
      return;
    }

    if (right < left) {
      return;
    }
    if (right === left) {
      generator(str + '(', left - 1, right)
      return;
    }
    if (left) generator(str + '(', left - 1, right)
    if (right) generator(str + ')', left, right - 1)
  }

  generator('', n, n)
  return result
};