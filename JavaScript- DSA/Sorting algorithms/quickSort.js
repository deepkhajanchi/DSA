//Time:O(n*n)
//Space: O(1)

var sortArray = function(nums) {
	let len = nums.length;
	if(len < 2) return nums;

	quickSort(nums, 0, len-1)
	return nums;
};

var quickSort = function(nums, start, end){
	if(start >= end) return;
	let left = start, right = end;
	let pivot = nums[Math.floor((start+end) / 2)];
	while(left <= right) {
		while(nums[left] < pivot){
			left++
		}
		while(nums[right] > pivot){
			right--
		}
		if(left <= right){
			let temp = nums[left]
			nums[left] = nums[right]
			nums[right] = temp
			left++
			right--
		}
	}
	quickSort(nums, start, right)
	quickSort(nums, left, end)
}