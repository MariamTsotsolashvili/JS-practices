function f(number) {
    if (typeof number === "number") {
        console.log(number**3);

    }
    else {
        throw new Error ('parameter type is not a Number');
    }
}

f(5);
f('content');