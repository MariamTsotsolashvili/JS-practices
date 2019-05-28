var check = false;
var arr = [12, 10, 15, 11, 14, 13, 16];
while (!check) {
    check = true;
    for (var i = 1; i < arr.length; i ++) {
    if (arr[i - 1] < arr[i]) {
        check = false;
        var min = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = min;
    }
    }
}
console.log(arr);