function f(Listt){
    let sum = 0;
    for (i of Listt) {
        if (typeof i !=='number') {
            throw new Error ('all parameters type should be a Number');
        }

        else {
            sum=sum +i
        }
    }
    return sum;

}

console.log(f([1,2,4]));