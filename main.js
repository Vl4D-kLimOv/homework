// 1 Задание
const reverseWords = function(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
};

const reversedWords = reverseWords('Hello World');
console.log(reversedWords); // Вывод: "olleH dlroW"

// 2 Задание
function* arrayIterator(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i]; 
    }
}

const gen = arrayIterator(['apple', 'banana', 'cherry']);
console.log(gen.next().value); // 'apple'
console.log(gen.next().value); // 'banana'
console.log(gen.next().value); // 'cherry'
console.log(gen.next().done);  // true

// 3 Задание
function map(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i, array));
    }
    return newArray;
}

const initArr = [1, 2, 3, 4, 5];
const callback = (item, index, array) => item * 2;
const res = map(initArr, callback);
console.log(initArr); // [1, 2, 3, 4, 5]
console.log(res);     // [2, 4, 6, 8, 10]

// 4 Задание
function createLogger(prefix) {
    return function(message) {
        console.log(`${prefix}${message}`);
    };
}

const errorLog = createLogger('ERROR: ');
errorLog('Пофикси меня!'); // ERROR: Пофикси меня!

const debugLog = createLogger('DEBUG: ');
debugLog('Важная отладочная информация!'); // DEBUG: Важная отладочная информация!

const infoLog = createLogger('INFO: ');
infoLog('Тестовое информационное сообщение.'); // INFO: Тестовое информационное сообщение.

// 5 Задание
const sumArray = function sum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sum(arr.slice(1));
};

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));

// 6 Задание
(function() {
    const randomNumbers = [...Array(5)].map(() => Math.floor(Math.random() * 100));

    const min = Math.min(...randomNumbers);
    const max = Math.max(...randomNumbers);

    console.log(randomNumbers);
    console.log(min);
    console.log(max);
})();


