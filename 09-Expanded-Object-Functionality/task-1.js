Object.prototype.extend = function(arg) {
    for (let i of Object.keys(arg)){
        if (typeof this[i] === 'undefined') {
            this[i] = i
            Object.defineProperty(this,i,Object.getOwnPropertyDescriptor(arg,i));
        }
    }
}

Object.defineProperty(Object.prototype,extend,{
    enumerable:false,
})

const data = { a: 'a' };
const source = { a: 'A', b: 'b' };

Object.defineProperty(source, 'b', { writable: false });

data.extend(source);

console.log(data); // { a: 'a', b: 'b' }
console.log(Object.getOwnPropertyDescriptor(data,'b').writable);
console.log(data.__proto__.__proto__);