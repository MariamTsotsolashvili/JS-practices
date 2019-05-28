function f(arg) {
    if (typeof arg !== "number") {
        throw new Error('parameter type is not a Number');
    }
    if (arg > 7) {
        throw new Error('parameter should be in the range of 1 to 7');
    }
    switch (arg){
        case 1 :
           console.log('ორშაბათი');
            break;
        case 2 :
            console.log('სამშაბათი');
                break;
        case 3 :
            console.log('ოთხშაბათი');
                break;
        case 4 :
            console.log('ხუთშაბათი');
                break;
        case 5 :
            console.log('პარასკევი');
                break;
        case 6 :
            console.log('შაბათი');
                break;
        case 7 :
            console.log('კვირა');
                break;
    }
}
f(2);