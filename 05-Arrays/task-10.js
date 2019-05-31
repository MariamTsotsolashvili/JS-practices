function Reverse(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameters must be an array');
    }
    if ( arr.length === 0 ) {
        throw new Error('Array must not be empty');
    }
 
    let result = [];
    for (let i = (arr.length - 1); i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
 }
 
 const arr = [3,2,1];
 console.log(Reverse(arr)); // [1,2,3]