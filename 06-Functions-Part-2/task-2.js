let mix = (...args) => {

    let result;
 
    for (let f of args){
        if (typeof f !== "function"){
            throw new Error("Each parameter must be a function");
        }
        else {
            result = f(result);
        }
    }
    return result
 }
 
 console.log(mix(() => {
    return 0;
 }, (prev) => {
    return prev + 1;
 }, (prev) => {
    return prev * 2;
 }))  // 2