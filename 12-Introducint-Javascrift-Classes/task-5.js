class Validator {
    constructor() {}

    isEmail(string) {

        if (string.includes("@")) {
            let aft = string.split("@") [1]
            if (this.isDomain(aft)) {
                return true;
            }
        }
        else {
            return false
        }
        

    }

    isDomain(string) {
        if ( string.split(".").length ==2) {
            return true
        }

        else {
            return false
        }
    }

    isDate(string) {

        let dateArray = string.split(".");
        let day = dateArray[0];
        let month = dateArray[1];
        let year = dateArray[2];

        if (day > 1 && day <=31  && month > 1 && month<=12 && year > 1) {
            return true
        }

        else {
            return false
        }
        
    }

    isPhone(string) {
        return string.match(/\+[0-9]{3} ?\([0-9]{2}\) ?[0-9]{3}-?([0-9]{2}-?){2}/) ? true : false;        
    }
}

let validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); // it can be format of your country