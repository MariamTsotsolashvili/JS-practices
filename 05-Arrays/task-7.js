let arr = ['abcd', 'abcde', 'ab', 'abc'];
let arrLength = [];
const result = arr.map(function(n){ 
    return arrLength.push(n.length);
});
console.log( arrLength );