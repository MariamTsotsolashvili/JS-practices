function ArrayFill (v, l) {
    if (!Array.isArray(v) && typeof v !== 'number' && typeof v !== 'string') {
        throw new Error('first parameter must be a number, string, object array');
    }
    if (typeof l !== 'number') {
        throw new Error('second parameter must be a number')
    }
 
    let result = []
    for (let i = 0; i < l; i++) {
        result.push(v);
    }
    return result;
 }
 
 let result = ArrayFill('x', 5);
 console.log(result);