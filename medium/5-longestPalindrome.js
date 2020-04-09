/**
 * @param {string} s
 * @return {string}
 * 给定一个字符串 s，找到 s 中最长的回文子串。
 */
// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。

var longestPalindrome = function(s) {
	let indexArrow = 1; // 中间索引走向
	let sLen = s.length; // 记录字符串长度
	let palindromStr = ''; // 记录最长回文子串
	if (!s || sLen < 2) {
		return s;
	}
	let start = 0; end = 0;
	while(indexArrow !== sLen) {
		start = indexArrow - 1;
		end = indexArrow + 1;
		let nowPalin = '';
		// 吸取下方中心扩展的写法, 注意  如 ssss 的情况,偶数间
		if (s[start] === s[indexArrow]) {
			nowPalin = s.substring(start, indexArrow + 1);
			start --;
		}
		if (s[end] === s[indexArrow]) {
			var endNowPalin = '';
			endNowPalin = s.substring(indexArrow, end + 1);
			if (nowPalin) {
				endNowPalin = s.substring(end, end + 1);
				nowPalin += endNowPalin;
			}
			end ++;
		}
		while(s[start] === s[end] && start >=0 && end <= sLen) {
			nowPalin = s.substring(start, end + 1);
			start --;
			end ++;
		}
		indexArrow ++;
		if (nowPalin.length > palindromStr.length) {
			palindromStr = nowPalin;
		}
	}
	return palindromStr;
};
console.log(longestPalindrome('ac'));
console.log(longestPalindrome('ss'));
console.log(longestPalindrome('ssss'));
console.log(longestPalindrome('adberebad'));
console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('basasasbaasad'));
console.log(longestPalindrome('cbbbd'));
console.log(longestPalindrome('cbbbc'));
console.log(longestPalindrome('cbabc'));
// a  d  b	e   r   e   b   a   d
// 1
// ^

// a  d  b	e   r   e   b   a   d
// 	  2
//    ^
// a != b  (×)

// a  d  b	e   r   e   b   a   d
// 	     3
//       ^
// d != e (×)

// a  d  b	e   r   e   b   a   d
// 	  		4
//    		^
// b != r (×)

// a  d  b	e   r   e   b   a   d
// 	  			5
//    			^
// e === e (√)[ e r e ]   =>   b === b(√)[b e r e b] =>	  d != a(×)

// a  d  b	e   r   e   b   a   d
// 	  				6
//    				^
// r != b(×)

// a  d  b	e   r   e   b   a   d
// 	  					7
//    					^
// e != a(×)

// a  d  b	e   r   e   b   a   d
// 	  						8
//    						^
// b != d(×)



// from 题解
var longestPalindrome2 = function(s) {

	if(!s || s.length < 2){
        return s;
    }
    let start = 0,end = 0;
    let n = s.length;
    // 中心扩展法
    let centerExpend = (left,right) => {
        while(left >= 0 && right < n && s[left] == s[right]){
            left--;
            right++;
        }
        return right - left - 1;
    }
    for(let i = 0;i < n;i++){
    	// !!!
     	// 此处与我上面的不同在于  (i,i) (i, i+1), 用于分割偶数个与奇数个的可能
     	// .eg  cbbbd    例如 第二步骤：从 b开始,以及从 bb 开始推算
     	// 好处在于  ssss 的时候 不会找漏
        let len1 = centerExpend(i,i);
        let len2 = centerExpend(i,i+1);
        // 两种组合取最大回文串的长度
        let maxLen = Math.max(len1,len2);
        if(maxLen > end - start){
            // 更新最大回文串的首尾字符索引
            start = i - ((maxLen - 1) >> 1);
            end = i + (maxLen >> 1);
        }
    }
    return s.substring(start,end+1);
}


// 动态规划解法

var longestPalindrome3 = function(s) {
    let n = s.length;
    let res = '';
    let dp = Array.from(new Array(n),() => new Array(n).fill(0)); // 生成一个  “二维数组”
    for(let i = n-1;i >= 0;i--){
        for(let j = i;j < n;j++){
        	dp[i][j] = false;
        	if (s[i] === s[j]) {
        		if (j - i < 2 || dp[i+1][j-1]) {
        			dp[i][j] = true;
        		}
        	}
            if(dp[i][j] && j - i +1 > res.length){
                res = s.substring(i,j+1);
            }
        }
    }
    console.log(dp);
    return res;
};
console.log('*******动态规划*******')
console.log(longestPalindrome3('asadsdassa'));