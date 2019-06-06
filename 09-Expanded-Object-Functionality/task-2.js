Object.defineProperty(Object.prototype, 'mergeDeepRight', {
    value(update) {
        for (let key of Object.keys(update)) {
            if (typeof this[key] === "object" && typeof update[key] === 'object') {
                this[key] = this[key].mergeDeepRight(update[key])
            } else {
                this[key] = update[key]
            }
        }
        return this

    }
});
const data = {
    name: 'fred',
    age: 10,
    contact: {
        email: 'moo@example.com',
        meta: {
            verified: true,
            tags: ['important']
        }
    }
};


data.mergeDeepRight({
    age: 40,
    contact: {
        email: 'baa@example.com',
        favorite: true,
        meta: {
            tags: ['vip']
        }
    }
});
console.log(data)