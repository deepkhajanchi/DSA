var binarySearch= function(arr, target){
    let left=0; right= arr.length - 1;
    while(left < right){
        let mid= (left + Math.floor(right-left+1)/2);
        if(target< arr[mid]){
            right = mid - 1;
        }
        else{
            left = mid;
        }
    }
    return arr[left]==target?left:-1;
}

var test= binarySearch([2,3,5,6,7,9], 9);
console.log(test);