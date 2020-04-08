/**
 * @param {string} s
 * @return {number}
 */
 /**
 * 滑动窗口
 */
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
