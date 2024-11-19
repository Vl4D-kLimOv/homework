// 1 Задача
function countNumericValues(obj) {
    const values = Object.values(obj);
    
    const numericValues = values.filter(value => typeof value === 'number');
    
    return numericValues.length;
}

// 2 Задача
const car = {};

Object.defineProperty(car, 'price', {
    value: 10000,          
    writable: true,      
    configurable: true,   
    enumerable: false     
});

// 3 Задача
function combineKeysAndValues(keys, values) {
    const entries = keys.map((key, i) => [key, values[i]]);
    
    const result = Object.fromEntries(entries);
    
    return result;
}

// 4 Задача
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const copy = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }

    return copy;
}

// 5 Задача
function removeKeys(obj, keys) {
    keys.forEach(key => {
        if (Object.keys(obj).includes(key)) {
            delete obj[key]; 
        }
    });
}

const obj = { a: 1, b: 2, c: 3, d: 4 };
removeKeys(obj, ['a', 'c']);
console.log(obj); // { b: 2, d: 4 }
