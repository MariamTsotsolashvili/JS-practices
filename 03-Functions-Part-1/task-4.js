function f(arg) {
    if (typeof arg !== "number") {
        throw new Error('parameter type is not a Number');
    }
    if (arg > 7) {
        throw new Error('parameter should be in the range of 1 to 7');
    }
    switch (arg){
        case 1 :
           return 'ორშაბათი';
        case 2 :
            return 'სამშაბათი';
        case 3 :
            return 'ოთხშაბათი';
        case 4 :
            return 'ხუთშაბათი';
        case 5 :
            return 'პარასკევი';
        case 6 :
            return 'შაბათი';
        case 7 :
            return 'კვირა';
    }
}
console.log(f(2));