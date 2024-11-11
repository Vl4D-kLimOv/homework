// Ситуация 1
const numbers = [-10, 5, 0, 3, -1, 8, -7];
const positiveNumbers = numbers.filter(number => number > 0);
console.log(positiveNumbers);
// Ситуация 2
const names = ['alice', 'bob', 'charlie', 'david'];
const upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames);
// Ситуация 3
const numbersToSort = [5, 3, 8, 1, 4];
numbersToSort.sort((a, b) => a-b);
console.log(numbersToSort);
// Ситуация 4
const numbersToSum = [10, 20, 30, 40, 50];
let sum = numbersToSum.reduce((sum, number)=>sum+number, 0)
console.log(sum)
// Ситуация 5
tasks = ["Купить продукты", "Сделать домашнее задание", "Позвонить другу"];
console.log(tasks.length);
tasks.push("Убраться в комнате");
tasks.shift();
console.log(tasks);
// Ситуация 6
const forbiddenWords = ['spam', 'advertisement', 'scam'];
const message = "This is a spam message with scam";
const containsForbiddenWord = forbiddenWords.some(word => message.includes(word));
console.log(containsForbiddenWord);