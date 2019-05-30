var forEach = function(arr,func) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter should an Array');
    }
    else if (!(typeof func === 'function')) {
        throw new Error('second parameter should be a Function');
    }

    for (i = 0; i < arr.length; i++) {
        func(arr[i], i, arr);
    }
}

let arr = [1,2,3];
forEach(arr, function(item,i,arr){
    console.log(i,':',item,', ','array: ',arr);
})

