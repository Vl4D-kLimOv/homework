// 1 уровень
// 1 Задание
const Vehicle = {
    type: 'транспорт', 
    move: function() {
        console.log(`${this.type} движется.`);
    }
};

const Car = Object.create(Vehicle);

Car.type = 'машина';

Car.move = function() {
    console.log('Машина едет.');
};

// 2 Задание
function Person(name, age) {
    this.name = name; 
    this.age = age;   

    this.greet = function() {
        console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет.`);
    };
}

const person1 = new Person('Влад', 19);
const person2 = new Person('Саша', 18);

person1.greet(); 
person2.greet(); 

// 3 Задание
const MathHelper = {};

MathHelper.add = function(a, b) {
    return a + b;
};

MathHelper.subtract = function(a, b) {
    return a - b;
};

MathHelper.multiply = function(a, b) {
    return a * b;
};

const sum = MathHelper.add(5, 3);
const difference = MathHelper.subtract(5, 3);
const product = MathHelper.multiply(5, 3);

console.log(`Сумма: ${sum}`);          
console.log(`Разность: ${difference}`); 
console.log(`Произведение: ${product}`); 

// 2 Уровень
// 1 Задание
const newVehicle = {
    speed: 0, 

    move: function() {
        console.log(`Транспортное средство движется со скоростью ${this.speed} км/ч.`);
    }
};

const newCar = Object.create(newVehicle);

newCar.fuelLevel = 0;

newCar.refuel = function(amount) {
    this.fuelLevel += amount;
    console.log(`Уровень топлива увеличен на ${amount} литров. Текущий уровень топлива: ${this.fuelLevel} литров.`);
};

const myCar = Object.create(newCar);

myCar.speed = 90; 
myCar.refuel(25);  

myCar.move(); 
console.log(`Текущий уровень топлива: ${myCar.fuelLevel} литров.`); 

// 2 Задание
function Pet(name, age) {
    this.name = name;
    this.age = age;
}

Pet.prototype.describe = function() {
    return `Имя: ${this.name}, Возраст: ${this.age}`;
};

Pet.prototype.isOld = function() {
    return this.age > 10;
};

Pet.compareAges = function(pet1, pet2) {
    if (pet1.age > pet2.age) {
        return `${pet1.name} старше, чем ${pet2.name}.`;
    } else if (pet1.age < pet2.age) {
        return `${pet2.name} старше, чем ${pet1.name}.`;
    } else {
        return `${pet1.name} и ${pet2.name} одного возраста.`;
    }
};

function Dog(name, age, breed) {
    Pet.call(this, name, age); 
    this.breed = breed; 
}


Dog.prototype = Object.create(Pet.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.describe = function() {
    return `Имя: ${this.name}, Возраст: ${this.age}, Порода: ${this.breed}`;
};


Dog.prototype.bark = function() {
    return `${this.name} лает!`;
};

Dog.prototype.fetch = function(item) {
    return `${this.name} приносит ${item}.`;
};

function GuardDog(name, age, breed, trainingLevel) {
    Dog.call(this, name, age, breed); 
    this.trainingLevel = trainingLevel; 
}

GuardDog.prototype = Object.create(Dog.prototype);
GuardDog.prototype.constructor = GuardDog;

GuardDog.prototype.bark = function() {
    if (this.trainingLevel > 5) {
        return `${this.name} лает громко!`;
    }
    return `${this.name} лает!`;
};

GuardDog.prototype.guard = function() {
    return `${this.name} охраняет территорию на уровне ${this.trainingLevel}.`;
};


const pet = new Pet('Барсик', 3);
console.log(pet.describe()); 
console.log(pet.isOld()); 

const dog = new Dog('Реф', 5, 'Немецкая овчарка');
console.log(dog.describe()); 
console.log(dog.bark()); 
console.log(dog.fetch('палку')); 

const guardDog = new GuardDog('Шарик', 7, 'Бульдог', 6);
console.log(guardDog.describe()); 
console.log(guardDog.bark()); 
console.log(guardDog.guard()); 


console.log(Pet.compareAges(pet, dog));