// 543. 二叉树的直径
// https://leetcode-cn.com/problems/diameter-of-binary-tree/

// 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
// 示例 :
//      1
//     / \
//    2   3
//   / \     
//  4   5
// 返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。
// 注意：两结点之间的路径长度是以它们之间边的数目表示。

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
// 思路：
// 1. 设计一个递归方程，使函数从叶向根传递当前节点的最深数值 depth
// 2. 每个节点的 depth，取决于左子节点与右子节点的最大值 + 1
// 3. 如果子节点不存在，该节点的 depth 即为自身 1，并向其父节点传递该方向的 depth
var diameterOfBinaryTree = function(root) {
    let ans = 0;
    let redo = (node) => {
        if (node === null) {
            return 0
        }
        let LDepth = redo(node.left)
        let RDepth = redo(node.right)
        ans = Math.max(ans, LDepth + RDepth)
        let depth = Math.max(LDepth, RDepth) + 1
        return depth
    }
    redo(root)
    return ans
};

//       1
//      / \
//     2   3
//    / \     
//   4   5
//  /
// 6

const root1 = new TreeNode(1)
const root2 = new TreeNode(2)
const root3 = new TreeNode(3)
root1.left = root2
root1.right = root3
const root4 = new TreeNode(4)
const root5 = new TreeNode(5)
root2.left = root4
root2.right = root5
const root6 = new TreeNode(6)
root4.left = root6
console.log(root1)

console.log(diameterOfBinaryTree(root1))