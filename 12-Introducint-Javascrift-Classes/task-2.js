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
    getName (){
        return this.name;
    }
    getSurname () {
        return this.surname
    }
    getRate () {
        return this.rate
    }
    getDays ()  {
        return this.days
    }
}


let worker = new Worker ('Sam', 'Doe', 20, 28)
console.log(worker.getName());
console.log(worker.getSurname()); 
console.log(worker.getRate());
console.log(worker.getDays()); 
console.log(worker.getSalary()); 