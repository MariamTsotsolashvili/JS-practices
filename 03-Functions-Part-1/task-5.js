let first = [1, 2, -4, 3, -9, -1, 7];
let scnd = [];
function f() {
    for (i of first) {
        if (i > 0){
            scnd.push(i)
        }
    }
    console.log(scnd);
}
f(first);

function isPositive(num) {
    if (typeof num !== "number"){
        throw new Error('parameter type is not a Number')
    }
    else if (num > 0) {
        console.log(true); 
    }
    else {
        console.log(false);
    }
}

isPositive(-5)