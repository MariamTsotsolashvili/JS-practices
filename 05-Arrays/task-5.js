function reduce(arr, func, strn) {

    if ( !Array.isArray(arr) ) {
        throw new Error('First parameter must be array.');
    }

    if (typeof func !== 'function') {
        throw new Error('Second parameter must be function.');        
    }

    if (typeof strn !== 'string' && typeof strn !== 'number') {
        throw new Error('Third parameter must be number or string.');        
    }

    for (let i = 0; i < arr.length; i++) {
        let fn = func(strn,arr[i], i, arr);

        if (fn) {
            strn = fn;
        }
    }
    return strn;
}

const arr = [1,2,3];
const acc = 0;
const result = reduce(arr,function(acc,item, i, arr) {
    return acc + item;
}, acc);

console.log(result);