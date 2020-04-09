/**
 * @param {string} s
 * @return {number}
 */
 /**
 * 滑动窗口
 */

 // 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
//  输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
var lengthOfLongestSubstring = function(s) {
	let length = 0;
	if (!s.length) {
		return length;
	}
	let tempStr = '';
	let len = s.length;
	let left = 0;
	for (let i = 0; i < len; i++) {
		if (tempStr.indexOf(s[i]) !== -1) {
			// 从找到的重复字符串的那一位数开始计数!
			left += (s.slice(left, i).indexOf(s[i]) + 1);
            continue;
		}
		tempStr = s.slice(left, i+1);
		length = Math.max(tempStr.length, length);
	}
	return length
};
lengthOfLongestSubstring('dsdfefefe');
lengthOfLongestSubstring('d');
lengthOfLongestSubstring('');
lengthOfLongestSubstring('pwepwepwe');
