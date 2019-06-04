const person = {
    get salary() {
        let day = new Date().getDate();
        if (person.rate) {
            return this.rate * day;
        }
        else {
            return 0;
        }
    }
};

Object.getOwnPropertyDescriptor(person, 'rate',{
    configurable: false,
    enumerable: false
});

Object.getOwnPropertyDescriptor(person, 'salary',{
    writable: false,
    enumerable: false
});

person.rate = 30;

console.log(person.salary);
