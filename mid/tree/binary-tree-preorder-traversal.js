// 给定一个二叉树，返回它的 前序 遍历。

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
// 2、中序遍历即先走根节点，每个节点优先返回它的值，再走左节点
// 3、递归调用完节点的左节点后，再开始走右节点

var preorderTraversal = function(root) {
    let ans = []
    const recursion = (root) => {
        if(root == null) {
            return
        }
        ans.push(root.val)
        recursion(root.left)
        recursion(root.right)
        return
    }
    recursion(root)
    return ans
};

console.log(preorderTraversal(root))
