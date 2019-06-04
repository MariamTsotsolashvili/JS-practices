const person = {
    get salary() {
        let now = new Date();
        let current = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
        let day = now.getDate();
        if (current - day > 20) {
            return 'good salary'
        }
        else {
            return 'bad salary'
        }
    }
};

console.log(person.salary);