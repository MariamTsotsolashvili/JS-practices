function filter(arr, func) {

    if ( !Array.isArray(arr) ) {
        throw new Error('first parameter must be array.');
    }

    else if (typeof func !== 'function') {
        throw new Error('second parameter must be function.');        
    }

    let final = [];

    for (i=0; i < arr.length; i++) {
        f = func(arr[i], i, arr);

        if(f) { 
            final.push(arr[i]);
        }
    }

    return final;
}

let arr = [1,2,-3,4,-5]

let final = filter(arr,function(item, i, arr){
    return item > 0;
})

console.log(final);



