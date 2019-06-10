class Worker {
    constructor (name,surname,rate,days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getName (){
        return this.name;
    }
    getSurname () {
        return this.surname;
    }
    setRate (result) {
        this.rate = result
    }
    setDays (result)  {
        this.days = result
    }
    getSalary () {
        return this.rate * this.days;
    }
}

let worker = new Worker ('Sam', 'Doe', 20, 28)

worker.setRate(20); // increase rate
worker.setDays(10); // decrease days
console.log(worker.getSalary()); // print 200 - because 20*10

