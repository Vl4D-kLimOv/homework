// Задание 1
async function fetchWithRetry(url, retries) {
    for (let attempt = 0; attempt <= retries; attempt++) {
        try {
            return await attemptFetch(url);
        } catch (error) {
            if (attempt === retries) {
                throw new Error(`Все попытки исчерпаны, ${error}`);
            }
            console.log('Повторяем попытку');
        }
    }
}

async function attemptFetch(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('HTTP ошибка!');
    }
    return await response.json();
}

fetchWithRetry("https://api.example.com/data", 3) //Данное API недействительно!
    .then(console.log)
    .catch(console.error);

//Задание 2
Function.prototype.myBind = function(context, ...args) {
    const originalFunction = this;

    return function(...newArgs) {
        return originalFunction.apply(context, [...args, ...newArgs]);
    };
};

const person = { name: 'Alice' };

function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const boundGreet = greet.myBind(person, 'Hello');
boundGreet();