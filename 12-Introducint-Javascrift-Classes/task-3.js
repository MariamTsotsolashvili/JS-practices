class Worker {
    constructor (name,surname,rate,days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }
    getName (){
        return this._name;
    }
    getSurname () {
        return this._surname;
    }
    setRate (result) {
        this._rate = result
    }
    setDays (result)  {
        this._days = result
    }
    getSalary () {
        return this._rate * this._days;
    }
}

let worker = new Worker ('Sam', 'Doe', 20, 28)

worker.setRate(20); // increase rate
worker.setDays(10); // decrease days
console.log(worker.getSalary()); // print 200 - because 20*10

