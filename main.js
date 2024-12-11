function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

async function performAction() {
    console.log("Action started");
    await delay(2000);
    console.log("Action completed after delay");
};

performAction();

function divideNumbers(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Ожидались числа");
        }
        
        if (b === 0) {
            throw new Error("Нельзя делить на 0");
        }

        return console.log(a / b);

    } catch (error) {
        console.error(error.message);
    }
};

divideNumbers(4, 2);
divideNumbers(1, 0);
divideNumbers(10, 'x');
divideNumbers('x', 'y');


async function fetchUserData() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    try {
        const response = await fetch(url);


        if (!response.ok) {
            throw new Error('Ошибка получения данных');
        }

        const users = await response.json();

        users.forEach(user => {
            console.log(user.name);
        });

    } catch (error) {

        console.error(error.message);
    }
};

fetchUserData();

async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Ошибка при получении данных');
    }
    return response.json();
}

async function fetchUserDataNew() {
    try {

        const posts = await fetchJson('https://jsonplaceholder.typicode.com/posts');
        
        const evenIdPosts = posts.filter(post => post.id % 2 === 0);
        
        const commentsPromises = evenIdPosts.map(post => 
            fetchJson(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        );
        
        const commentsArray = await Promise.all(commentsPromises);
        
        const results = evenIdPosts.map((post, index) => {
            const comments = commentsArray[index];
            let longestComment = { body: '' };
            
            comments.forEach(comment => {
                if (comment.body.length > longestComment.body.length) {
                    longestComment = comment;
                }
            });
            
            return { postId: post.id, longestComment: longestComment.body };
        });
        
        const postPromises = results.map(result => 
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(result)
            })
        );

        await Promise.all(postPromises);
        console.log('Результаты успешно сохранены');
        
    } catch (error) {
        console.error(error.message);
    }
}


fetchUserDataNew();