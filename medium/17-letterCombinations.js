/**
 * @param {string} digits
 * @return {string[]}
 */
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
//		1		2		3
//			   abc	   def
//
//		4		5		6
// 	   ghi	   jkl	   mno	
// 
//		7		8		9
//     pqrs	   tuv     wxyz
// 仅包含 2 - 9 //
// 输入： 23
// 输出： ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

// 			2	 	3		4
// 			a b c 	d e f 	g h i 		
// =>		a 	b 	c  |	d 	e 	f  |	g 	h	i

// 			2		2
// 			a b c 	a b c
// =>		a 	b 	c  |	a 	b 	c

//					start
//					  2
//			a 		  b 		c
// 		3			  3			  	3
// d 	e 	f 	  d   e  f 		d   e	f


// 感觉， 传 a 。  传 d 。 传 ghi   递归  去选？
var letterCombinations = function(digits) {
	let result = [];
	if (digits === '') {
		return [];
	}
	let numTostr = {
		'2': 'abc',
		'3': 'def',
		'4': 'ghi',
		'5': 'jkl',
		'6': 'mno',
		'7': 'pqrs',
		'8': 'tuv',
		'9': 'wxyz'
	}; // 数字与字符的映射
	function iterFunc(i,str) {
        if(i === digits.length) {
            result.push(str);
            return;
        } 
        let StrtoNum  = numTostr[digits[i]]; // 将对应的数组解析成字符串
        let k = 0;
        while(k < StrtoNum.length) {
        	iterFunc(i+1,str+StrtoNum[k]) // 递归的部分
        	k++;
        }
    }
    iterFunc(0,'')

	return result;
};
console.log(letterCombinations('23'));
console.log(letterCombinations(''));

// 总结：初步感觉这些类似 n*n去搭配的问题，可以尝试递归的思路