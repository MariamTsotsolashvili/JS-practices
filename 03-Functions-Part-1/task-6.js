function isEven (item) {
    if (item % 2 == 0) {
        console.log(true);
    }
    else {
        console.log(false);
    }
    if (typeof item !== "number"){
        throw new Error('parameter type is not a Number')
    }
}
isEven(15);