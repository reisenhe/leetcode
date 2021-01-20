// 200. 岛屿数量
// https://leetcode-cn.com/problems/number-of-islands/

// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
// 此外，你可以假设该网格的四条边均被水包围。

// 输入：grid = [
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
//   ]
// 输出：1

// 输入：grid = [
//     ["1","1","0","0","0"],
//     ["1","1","0","0","0"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
//   ]
// 输出：3

/**
 * @param {character[][]} grid
 * @return {number}
 */

// 思路：抄答案 - 深度优先搜索
// 1. 如果存在一块陆地，就把它相邻的位置都设置成0，并递归调用相邻位置
// 2. 这样下次遇到新的 grid[i][j] === '1' 时，必定不是与原来相连的岛屿
var numIslands = function(grid) {
    if (grid == null || grid.length == 0) {
        return 0
    }
    let rowL = grid.length
    let colL = grid[0].length
    le ans = 0;
    for (let i = 0; i < rowL; i++) {
        for (let j = 0; j < colL; j++) {
            if (grid[i][j] === '1') {
                ans += 1
                dfs(grid, i, j)
            }
        }
    }
    return ans
};

let dfs = (grid, i, j) => {
    let rowL = grid.length
    let colL = grid[0].length
    // 如果出界或者遇到了 grid[i][j] === '0', 结束该轮搜索
    if (i < 0 || j < 0 || i > rowL || j > colL || grid[i][j] === '0') {
        return
    }
    // 修改位置为 0
    grid[i][j] = '0'
    // 递归调用与当前相邻的其他位置
    dfs(grid, i-1, j)
    dfs(grid, i+1, j)
    dfs(grid, i, j-1)
    dfs(grid, i, j+1)
}

let grid = [
    ["1","1","1","0","1"],
    ["1","1","0","1","1"],
    ["1","0","0","0","1"],
  ]

numIslands(grid)