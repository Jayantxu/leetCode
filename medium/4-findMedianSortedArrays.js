/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
	let newArr = [...nums1, ...nums2].sort((a, b) => {
		return a - b;
	})
	let length = newArr.length;
	if (length % 2) {
		return newArr[Math.floor(length / 2)];
	}
	return (newArr[length / 2] + newArr[length / 2 - 1]) / 2;
};
console.log(findMedianSortedArrays([1, 2], [3, 4, 5]));
console.log(findMedianSortedArrays([1, 2], [4, 6, 9]));
