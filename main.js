//1 Уровень
//1 Задание

function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

wait(10000) 
    .then(() => {
        console.log('Промис разрешен!'); 
    });

//2 Задание

function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Шаг 1 выполнен");
        }, 1000);
    });
}

function step2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Шаг 2 выполнен");
        }, 2000);
    });
}

step1()
    .then((result1) => {
        console.log(result1); 
        return step2(); 
    })
    .then((result2) => {
        console.log(result2);
    })

//3 Задание
function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Задача 1 завершена");
        }, 1000);
    });
}


function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Задача 2 завершена");
        }, 2000); 
    });
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Задача 3 завершена");
        }, 3000); 
    });
}

Promise.all([task1(), task2(), task3()])
    .then((results) => {
        results.forEach(result => console.log(result));
    })

//2 Уровень
//1 Задание

const usersUrl = 'https://jsonplaceholder.typicode.com/users'; 
const postsUrl = 'https://jsonplaceholder.typicode.com/posts'; 
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                return Promise.reject();
            }
            return response.json();
        });
}

Promise.all([
    fetchData(usersUrl),
    fetchData(postsUrl),
    fetchData(commentsUrl)
])
.then(([users, posts, comments]) => {
    console.log('Пользователи:', users);
    console.log('Посты:', posts);
    console.log('Комментарии:', comments);
})
.catch(() => {
    console.log('Ошибка при получении данных');
});

//2 Задание
const usersUrlNew = 'https://jsonplaceholder.typicode.com/users';
const postsUrlNew = 'https://jsonplaceholder.typicode.com/posts';
const commentsUrlNew = 'https://jsonplaceholder.typicode.com/comments';

const fetchWithTimeout = (url) => {
    return Promise.race([
        fetch(url).then(response => {
            if (!response.ok) {
                return Promise.reject('Ошибка при получении данных');
            }
            return response.json();
        }),
        new Promise((_, reject) =>
            setTimeout(() => reject('Запрос превышает время ожидания'), 5000)
        )
    ]);
};

Promise.all([
    fetchWithTimeout(usersUrlNew),
    fetchWithTimeout(postsUrlNew),
    fetchWithTimeout(commentsUrlNew)
])
.then(results => {
    const [users, posts, comments] = results;
    console.log('Пользователи:', users);
    console.log('Посты:', posts);
    console.log('Комментарии:', comments);
})
.catch(error => {
    console.log(error);
});