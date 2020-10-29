// 给定一个二叉树，它的每个结点都存放一个 0-9 的数字，每条从根到叶子节点的路径都代表一个数字。
// 例如，从根到叶子节点路径 1->2->3 代表数字 123。
// 计算从根到叶子节点生成的所有数字之和。
// 说明: 叶子节点是指没有子节点的节点

// 输入: [1,2,3]
//     1
//    / \
//   2   3
// 输出: 25
// 解释:
// 从根到叶子节点路径 1->2 代表数字 12.
// 从根到叶子节点路径 1->3 代表数字 13.
// 因此，数字总和 = 12 + 13 = 25.


// 思路：抄答案
// 1、每到一个节点，计算该节点和前一个节点的和，并将和传入下个节点进行递归
// 2、数字组合后相加，可以理解为前一轮的和 preSum * 10 + node.val 
// 3、如果节点左右都为0，返回当前和 sum 即可
var sumNumbers = function(root) {
    const dfs = (node, preSum) => {
        if (node == null) {
            return 0
        }
        const sum = preSum * 10 + node.val;
        if (node.left == null && node.right == null) {
            return sum
        } else {
            return dfs(node.left, sum) + dfs(node.right, sum)
        }
    }

    return dfs(root, 0)
};