/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
给定一个按照  升序排列  的整数数组 nums，和一个目标值 target。
找出给定目标值在数组中的开始位置和结束位置。

你的算法时间复杂度必须是 O(log n) 级别。

如果数组中不存在目标值，返回 [-1, -1]。
*/

/**
输入: nums = [5,7,7,8,8,10], target = 8
输出: [3,4]
*/

/**
O(log n) -> 二分查找 ? 



*/

var searchRange = function(nums, target) {
 	let left = 0, right = nums.length - 1, mid;
 	// ① 先用了二分找了 mid
	while (left <= right) {
	    mid = (left + right) >> 1;
	    if (nums[mid] === target) break;
	    if (nums[mid] > target) right = mid - 1;
	    else left = mid + 1;
	}
 	// ② 之后再进行了线性查找,因为题目说了是有序的
	if(left > right) return [-1, -1];
	let i = mid, j = mid;
	while(nums[i] === nums[i - 1]) i--;
	while(nums[j] === nums[j + 1]) j++;
	return [i, j];
	// ③ 不过题解似乎用两次二分，分别求左边界，求右边界更好
};