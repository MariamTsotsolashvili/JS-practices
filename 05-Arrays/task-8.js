function f(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('parameter must be an array');
    } 
    if ( arr.length === 0 ) {
        throw new Error('array mustn\'t be an empty');
    }

    let inf = arr.flat(Infinity);
    let fin = inf.reduce(function(current, sum) {
        return sum + current;
    }, 0);
 
    return fin;
 }
 
 const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
 console.log(f(arr)); // 12
 const arr2 = [[[[[1,2]]]]];
 console.log(f(arr2)); // 3
 const arr3 = [[[[[1,2]]],2],1];
 console.log(f(arr3)); // 6
 const arr4 = [[[[[]]]]];
 console.log(f(arr4)); // 0
 const arr5 = [[[[[],3]]]];
 console.log(f(arr5)); // 3