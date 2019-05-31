let first = [1, 2, -4, 3, -9, -1, 7];
let scnd = [];
function f() {
    for (i of first) {
        if (i > 0){
            scnd.push(i)
        }
    }
    return scnd;
}
f(first);

function isPositive(num) {
    if (typeof num !== "number"){
        throw new Error('parameter type is not a Number')
    }
    else if (num > 0) {
        return true; 
    }
    else {
        return false;
    }
}

console.log(isPositive(-5));