// 1. Нарушен принцип инверсии зависимостей
//Исправленный код
class Service { //Создаем общий интерфейс
    sendMessage(message) {
        throw new Error("это интерфейс");
    }
}

class EmailService extends Service{ //Переопределяем этот интерфейс под нужную задачу
    sendMessage(message) {
        console.log(`Отправка email с сообщением: ${message}`);
    }
}

class Notification { 
  constructor(service) {
      this.service = service;
  }
 
  notify(message) {
      this.service.sendMessage(message);
  }
}
 
const notification = new Notification(new EmailService); 
notification.notify("Важное сообщение");
 
 
 //2. Нарушен принцип подстановки Барбары Лисков
 //Исправленный код: 

class Bird {
    fly() {
        console.log("Птица летит");
    }
    action() {
        this.fly(); //создаем новый общий метод, который будем вызввать при действии. Передаем в него то, что птица делать умеет делать
    }
}

class Duck extends Bird {}
class Penguin extends Bird {

    action() {
        this.swim(); //вместо fly используем swim
    }
    swim() {
        console.log("Птица плавает")
    }
    fly() {
        throw new Error("Пингвины не умеют летать");
    }

}

const birds = [new Duck(), new Penguin()];
birds.forEach(bird => bird.action()); //вызывем общщий метод
 

 //3. Был нарушен принцип единственной ответственности
 //Исправленный код:

class Database { //Создаем новый класс для для базы данных, у которого будем вызывать соответствующий метод
  save(user) {
      console.log(`Сохранение пользователя ${user.getName()} в базу данных`);
  }
}
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
 
    getName() {
        return this.name;
    }
}

const user = new User("Алексей", 30);
const database = new Database;
database.save(user);