// 给定两个二叉树，编写一个函数来检验它们是否相同。
// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

function TreeNode(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
}

let p = new TreeNode(1, new TreeNode(2), new TreeNode(3))
let q = new TreeNode(1, new TreeNode(2), new TreeNode(4))

// 思路：递归
// 1、首先排除为null和undefined的情况，如果A和B一方存在null或undefined，返回是否相同
// 2、接着先以非undefined判断 X.val (因为val默认为0，不能用!判断)，排除A.val和B.val不相等的情况
// 3、如果存在左右子节点，为A和B的子节点递归调用1和2类判断
// 4、都无问题返回真
var isSameTree = function (p, q) {
    const recursion = function(p, q) {
        if(!p || !q) {
            return p === q
        }
        if(p.val !== undefined && q.val !== undefined && p.val !== q.val) {
            return false;
        }
        if (p.left || q.left) {
            if(!recursion(p.left, q.left)) {
                return false
            }
        }
        if (p.right || q.right) {
            if(!recursion(p.right, q.right)) {
                return false
            }
        }
        return true
    }
    return recursion(p, q)
}

// 解法调整
// 因为undefined == null，于是可以将A、B为空时解法调整为
// 1、若都为空，返回true
// 2、若只有其中一方为空，返回false
// 3、如果都不为空，则判断val是否相等
// 4、为左右子节点分别调用该判断
var isSameTree2 = function (p, q) {
    if(p == null && q == null) {
        return true
    }
    if(p == null || q == null) {
        return false
    }
    if(p.val !== q.val) {
        return false
    }
    return isSameTree2(p.left, q.left) && isSameTree2(p.right, q.right)
}
console.log(p, q)
console.log(isSameTree2(p, q))