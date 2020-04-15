/**
 * @param {number} num
 * @return {string}
 */
 // 罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。
// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

// from 题解   ， 贪心算法

var intToRoman = function(num) {
	var s = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    var arr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    var str = ''
    for(let i = 0; i < arr.length;) {
        if(num >= arr[i]) {
            num -= arr[i];
            str += s[i];
        } else {
            i++;
        }
    }
    return str;
};
console.log(intToRoman(58));
console.log(intToRoman(3298));
console.log(intToRoman(587));
