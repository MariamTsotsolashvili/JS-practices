function f(number) {
    if (typeof number === "number") {
        return number**3;
    }
    else {
        throw new Error ('parameter type is not a Number');
    }
}

console.log(f(5));
console.log(f('content'));