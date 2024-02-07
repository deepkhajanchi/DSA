var fib = function(n) {
    let map= new Map();
    if(map.has(n))  return map.get(n);
    let result=[];
    if(n<2) result=n;
    else{
        result= fib(n-1)+fib(n-2);        
    }
    //console.log('2');
    map.set(n,result);
    //console.log(result);
    return result;
};

console.log(fib(4));