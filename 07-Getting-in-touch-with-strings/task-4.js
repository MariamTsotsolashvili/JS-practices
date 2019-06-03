function extractCurrencyValue(source) {
    if (typeof source !='string'){
        throw new Error('Parameter should be a String!');
    }
    const currency = source.substring(1);
    return +(currency);
}

console.log(extractCurrencyValue('$120'));