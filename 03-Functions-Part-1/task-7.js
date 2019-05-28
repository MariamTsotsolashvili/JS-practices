function getDivisors(item) {
    let divs = [];
    if (item <= 0) {
        throw new Error('parameter can\'t be a 0')
    }
    else {
        for (let i = 1; i <= item; i++) {
            if (item % i == 0) {
                divs.push (i)
            }
        }
    }
    if (typeof item !== "number") {
        throw new Error('parameter type is not a Number');
    }
    console.log(divs);
}

getDivisors(15);