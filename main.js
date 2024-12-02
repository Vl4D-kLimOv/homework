// Уровень 1
// Задание 1
class Book {
    constructor(title, author) {
        this.title = title;   
        this.author = author;
    }

    getBookInfo() {
        return `Название: "${this.title}", Автор: ${this.author}`;
    }
}

const myBook = new Book('1984', 'Джордж Оруэлл');

console.log(myBook.getBookInfo()); 

// Задание 2
class Person {
    #name;
    #age; 

    constructor(name, age) {
        this.#name = name; 
        this.#age = age; 
    }

    getName() {
        return this.#name; 
    }

    getAge() {
        return this.#age;
    }
}

const person = new Person('Влад', 19);

console.log(`Имя: ${person.getName()}`); 
console.log(`Возраст: ${person.getAge()}`);

// Задание 3
class Animal {

    constructor(name, age) {
        this.name = name; 
        this.age = age; 
    }

    describe() {
        return `Имя ${this.name}, возраст: ${this.age} лет.`;
    }

    sound() {
        return `${this.name} издает звук.`;
    }
}

class Dog extends Animal {
    sound() {
        return `${this.name} лает!`;
    }
}

const animal = new Animal('Медведь', 5);
console.log(animal.describe()); 
console.log(animal.sound());    

const dog = new Dog('Рекс', 3);
console.log(dog.describe()); 
console.log(dog.sound()); 

// Уроовень 2
// Задание 1
class newPerson {
    _name;

    constructor(name) {
        this._name = name;
    }

    getName() {
        return this._name;
    }

    setName(newName) {
        this._name = newName;
    }
}

class Student extends newPerson {
    _grade;

    constructor(name, grade) {
        super(name); 
        this.setGrade(grade);
    }

    getGrade() {
        return this._grade;
    }

    setGrade(newGrade) {
        if (newGrade < 1 || newGrade > 5) {
            console.log('Ошибка: Оценка должна быть в пределах от 1 до 5.');
            return; 
        }
        this._grade = newGrade;
    }
}

const newperson = new newPerson('Иван Иваныч');
console.log(newperson.getName()); 

newperson.setName('Саша');
console.log(newperson.getName()); 

const student = new Student('Вася', 4);
console.log(student.getName()); 
console.log(student.getGrade()); 

student.setGrade(5);
console.log(student.getGrade());

student.setGrade(6);

// Задание 2
class Shape {

    static count = 0;

    #name;

    constructor(name) {
        this.#name = name;
        Shape.count++;
    }

    getArea() {
        print("Метод 'getArea()' должен быть переопределен в подклассе.");
    }

    getName() {
        return this.#name;
    }

    static getCount() {
        return Shape.count;
    }
}


class Rectangle extends Shape {

    constructor(width, height) {
        super('Rectangle'); 
        this.width = width;
        this.height = height;
    }


    getArea() {
        return this.width * this.height;
    }
}


class Circle extends Shape {

    constructor(radius) {
        super('Circle'); 
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}


const rectangle = new Rectangle(5, 10);
const circle = new Circle(4);

console.log(`${rectangle.getName()} - Площадь: ${rectangle.getArea()}`); 
console.log(`${circle.getName()} - Площадь: ${circle.getArea()}`); 

console.log(`Количество созданных фигур: ${Shape.getCount()}`); 