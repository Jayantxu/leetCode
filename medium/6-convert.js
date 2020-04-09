/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// 输入: s = "LEETCODEISHIRING", numRows = 4
// 输出: "LDREOEIIECIHNTSG"
// 解释:

// 创造一个二维数组 装进去？

// 输入 L E E T C O D E I S H I R I N G
// 			个人想法       		 	 =>     		leeCode网友解法
// [L] [0] [0] [D] [0] [0] [R] 					 [L] [D] [R]			 	0 [L,0][D,6][R,12]
// [E] [0] [O] [E] [0] [I] [I]		 =>			 [E] [O] [E] [I] [I] 	=>	1 [E,1][O,5][E,7][I,11][I,13]
// [E] [C] [0] [I] [H] [0] [N]		 =>			 [E] [C] [I] [H] [N] 	=>	2 [E,2][C,4][I,8][H,10][N,14]
// [T] [0] [0] [S] [0] [0] [G] 					 [T] [S] [G]				3 [T,3][S,9][G,15]

var convert = function(s, numRows) {
	let tA = [];
	for (let i = 0; i < numRows; i ++) {
		tA[i] = '';
	}	
	// 单行输入输出的情况， 'AB', 1  =>  'AB'
	if (numRows === 1) {
		return s;
	}
	let dir = -1;
	let numArrInd = 0;
	for(let j = 0; j < s.length; j++) {
		if (numArrInd === 0) {
			dir = 1;
		}
		if (numArrInd === numRows - 1) {
			dir = -1;
		}
		tA[numArrInd] += s[j];
		numArrInd += dir;
	}
	return tA.join('');
};
console.log(convert('LEETCODEISHIRING', 4));
console.log(convert('LEETCODEISHIRING', 3));
console.log(convert('AB', 1));