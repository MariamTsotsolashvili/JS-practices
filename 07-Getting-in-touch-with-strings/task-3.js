function truncate(string, maxlength) {
    if (typeof string !='string' && typeof maxlength !='string'){
        throw new Error('Parameter should be a String!');
    }
    if (string.length > maxlength) {
        return string.slice(0, maxlength -3) + '...'
    }
    else {
        return string
    }
}
console.log(truncate('I wanna to say next thing about this topic', 22));