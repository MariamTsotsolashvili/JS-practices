function upperCaseFirst(string){
    if (typeof string !='string'){
        throw new Error('Parameter should be a String!');
    }

    let firstChar = string.charAt(0);
    let firstLetter = firstChar.toUpperCase();
    string = string.replace(firstChar,firstLetter);

    return string;

}

console.log(upperCaseFirst('pitter'));
console.log(upperCaseFirst(''));