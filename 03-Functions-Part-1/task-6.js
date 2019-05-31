function isEven (item) {
    if (typeof item !== "number"){
        throw new Error('parameter type is not a Number')
    }
    if (item % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven("agdgd"));