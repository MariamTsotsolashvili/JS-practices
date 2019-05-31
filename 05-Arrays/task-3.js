function every(arr,func) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter should an Array');
    }
    else if (!(typeof func === 'function')) {
        throw new Error('second parameter should be a Function');
    }


    for ( i = 0; i < arr.length; i++) {
        let fn = func(arr[i], i, arr);

        if (fn) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}


const arr = [1,2,3];

const result = every(arr, function(item, i, arr){
    return item > 1;
});

console.log(result);
