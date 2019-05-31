function reduceRight(arr, func, strn) {

    if ( !Array.isArray(arr) ) {
        throw new Error('First parameter must be array.');
    }

    if (typeof func !== 'function') {
        throw new Error('Second parameter must be function.');        
    }

    if (typeof strn !== 'string' && typeof strn !== 'number') {
        throw new Error('Third parameter must be number or string.');        
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        let fn = func(strn,arr[i], i, arr);
        strn = fn;
    }
    return strn;
}

const arr = [1,2,3];
const acc = 0;
const result = reduceRight(arr,function(acc,item, i, arr) {
    return acc + item;
}, acc);

console.log(result);