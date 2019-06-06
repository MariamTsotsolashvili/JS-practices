const person = {};

Object.defineProperty(person, 'rate',{
    configurable: false,
    enumerable: false,
    writable: true
});

Object.defineProperty(person, 'salary',{
    get() {
        let day = new Date().getDate();
        if (person.rate) {
            return this.rate * day;
        }
        else {
            return 0;
        }
    },
    set(){
        throw new Error('Salary can not be changed');
    },
});

person.rate = 30;
person.salary = 12;

console.log(person.salary);

