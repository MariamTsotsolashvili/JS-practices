class Customers {
    constructor() {
        this.users = []
    }
    *[Symbol.iterator] () {
        for (const item of [...this.users]) {
            if (item.verified) {
                yield item;
            }
        }
    }
    add(obj) {
        if(typeof obj !== 'object') {
            throw new Error('parameter must be an object');
        }else if (typeof obj.name !== 'string') {
            throw new Error('name is required.');
        }
        this.users.push(obj)
    }
}

const customers = new Customers();

customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}