let reverseArray= function(array){
    let start=0, end= array.length-1;
    while(start< end){
        let temp= array[start];
        array[start]= array[end];
        array[end]= temp;
        start++;
        end--;
    }
    return array;
}

let test= reverseArray([1,2,3])
console.log(test);