class MyString {
    constructor () {}
    reverse(str){
        let string ="";
        for(let i= 0; i<str.length; i++){
            string = str[i]+string;
        }
        return string;
    }
    ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    ucWords (str){
        let result = ''
        let R = str.split(" ");
        for(let i of R){
            result += this.ucFirst(i) + ' ';
        }
        return result;
    }
}

let str = new MyString();

console.log(str.reverse('abcde'));
console.log(str.ucFirst('abcde'));
console.log(str.ucWords('abcde abcde abcde'));