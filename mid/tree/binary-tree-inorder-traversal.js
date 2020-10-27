// 给定一个二叉树，返回它的 中序 遍历。

function TreeNode(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let root = new TreeNode(
    1, 
    null,
    new TreeNode(
        2,
        new TreeNode(3)
    )
)
// 思路：
// 1、因为要求数组形式返回，所以递归树节点，将其值添加到数组里即可
// 2、中序遍历即先走左节点，当没有左节点时返回此时的根节点
// 3、如果仍然有左节点，重复 (2)， 再以相同思路走右节点
var inorderTraversal = function(root) {
    let ans = []
    const recursion = (root) => {
        if (!root) {
            return
        }
        recursion(root.left)
        ans.push(root.val)
        recursion(root.right)
        return
    }
    recursion(root)
    return ans
};

console.log(inorderTraversal(root))
