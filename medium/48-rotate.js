	/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let n = matrix.length, m = Array.from({length: n}, (_, i) => matrix[i].slice())
    for (let i = n; i--;) 
        for (let j = n; j--;) 
            matrix[i][j] = m[n - 1 - j][i]
};