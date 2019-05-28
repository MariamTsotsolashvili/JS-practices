function f(arr){
    let result = 0
    for (i of arr ) {
        if (typeof i !=='number') {
            throw new Error ('all parameters type should be a Number');
        }

        else {
            result = (arr[0]-arr[1])/arr[2];
        }
    }
    console.log(result)

}

f([9,3,'b'])