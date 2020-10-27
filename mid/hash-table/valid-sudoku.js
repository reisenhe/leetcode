// 判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。

// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。

/* 
输入:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
输出: true
*/

// 思路：
// 1、二层循环，横向一行只通过每行新创建的字符串 horizontal 查找
// 2、纵向一列，以行循环的索引 n 作键值存入 vertical 哈希表
// 3、3x3宫格，以 x-y 作键值存入 squere 哈希表，x 为宫格所在行，y 为宫格所在列
// 4、若对应的字符串已有该值，中止循环，返回 flag
var isValidSudoku = function(board) {
    let vertical = {};
    let squere = {};
    let flag = true;

    for(let i = 0; i < board.length; i++) {
        if(!flag) {
            break
        }
        let horizontal = '';
        let line = board[i];
        let sKey_head = i < 3 ? '0' : i < 6 ? '1' : '2';
        for (let n = 0; n < line.length; n++) {
            let sKey = sKey_head + '-' + (n < 3 ? 0 : n < 6 ? 1 : 2);
            if (horizontal.indexOf(line[n]) >= 0) {
                flag = false;
                break
            }
            if (vertical[n] && vertical[n].indexOf(line[n]) >= 0) {
                flag = false;
                break
            }
            if (squere[sKey] && squere[sKey].indexOf(line[n]) >= 0) {
                flag = false
                break
            }
            if(line[n] === '.'){
                continue
            }
            horizontal += line[n]
            vertical[n] = (vertical[n] || '') + line[n]
            squere[sKey] = (squere[sKey] || '') + line[n]
        }
    }

    return flag
};
