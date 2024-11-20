// 1.
function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]; 
    }
    return sum; 
}

// 2.
function filterEvens() {
    return Array.from(arguments).filter(num => num % 2 === 0);
}
console.log(filterEvens(1, 2, 3, 4, 5, 6));

// 3.
const obj = { 
    name: 'Object', 
    getName: function () { 
      return this.name; 
    } 
}; 

const getName = obj.getName; 
console.log(getName()); //undefined
const newGetName = obj.getName.bind(obj)
console.log(newGetName());

// 4.
function greet(){
console.log(`Hi, i'm ${this.name}`)
}

const person = { name: 'Alice' };

greet.call(person)
greet.apply(person)
const contextGreet = greet.bind(person)
contextGreet()

// Уровень 1
const sumTwo = (a, b) => a + b;

// Уровень 2
const doubleArray = (arr) => arr.map(num => num * 2);

// Уроыень 3
const getStringLengths = (arr) => arr.map(str => str.length);
  