/**
 * @param {string} str
 * @return {number}
 */
// 见网友题解
// from https://leetcode-cn.com/problems/string-to-integer-atoi/solution/javascripttou-ji-qu-qiao-wu-xu-si-kao-yi-kan-jiu-h/
var myAtoi = function(str) {
	// let resultStr = str.trim();
	// return parseInt(resultStr, 10);

 	const number = parseInt(str, 10);
    if(isNaN(number)) {
        return 0;
    } else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
        return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
    } else {
        return number;
    }

};
console.log(myAtoi('   -42'));
console.log(myAtoi('+42'));
console.log(myAtoi('42'));
console.log(myAtoi('4 2 9902  23'));
console.log(myAtoi('4920 word'));
