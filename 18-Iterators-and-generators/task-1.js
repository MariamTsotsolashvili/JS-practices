class Customers {
    constructor() {
        this.users = []
    }
    [Symbol.iterator] () {
        let i = 0;
        let iter = this.users.filter(function(item) {
            if (item.verified) {
                return item;
            }
        });
        return {
            next() {
                const done = i >= iter.length;
                const value = !done ? iter[i++] : false;
    
                return {
                    value,
                    done
                }
            }
        }
    }
    add(obj) {
        if(typeof obj !== 'object') {
            throw new Error('parameter must be an object');
        }else if (typeof obj.name !== 'string') {
            throw new Error('name must be a string');
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

