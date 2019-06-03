function checkSpam(source, example) {
    if (typeof source !='string' && typeof example !='string'){
        throw new Error('Parameter should be a String!');
    }
    let sourcelower = source.toLowerCase();
    let examplelower = example.toLowerCase();

    if (sourcelower.includes(examplelower)) {
        return true 
    }
    else {
        return false
    }
}

console.log(checkSpam('pitterXXX@gmail.com', 'Xxx'));
console.log(checkSpam('pitterxxx@gmail.com', 'XXX')); 
