//Time: O(nlogn)
//Space: O(n)

var sortArray = function(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    
    const middle = Math.floor(nums.length / 2);
    const left = sortArray(nums.slice(0, middle));
    const right = sortArray(nums.slice(middle, nums.length));
    return merge(left, right);   
};

function merge(left, right) {
    let leftIndex = 0;
    let rightIndex = 0;
    const result = [];
    
    while(leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    while(leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    
    while(rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    
    return result;
}