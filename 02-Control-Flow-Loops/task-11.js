let check = false;
let arr = [12, 10, 15, 11, 14, 13, 16];
while (!check) {
    check = true;
    for (let i = 1; i < arr.length; i ++) {
    if (arr[i - 1] > arr[i]) {
        check = false;
        let max = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = max;
    }
    }
}
console.log(arr);