class Worker {
    constructor (name,surname,rate,days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary () {
        return this.rate * this.days;
    }
}


let sam = new Worker ('Sam', 'Doe', 20, 28)

console.log(sam.name); // print 'John'
console.log(sam.surname); // print 'Smith'
console.log(sam.rate); // print 10
console.log(sam.days); // print 31
console.log(sam.getSalary()); // print 310 - because 10*31

let john = new Worker('John', 'Smith', 10, 31);

console.log(john.name);
console.log(john.surname);
console.log(john.rate);
console.log(john.days); 
console.log(john.getSalary());
console.log(john.getSalary() + sam.getSalary())