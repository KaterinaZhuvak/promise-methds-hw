//Task 1 
const delayedPromise =(data, delay)=> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, delay);
    });
}
const delayedPromises = [
    delayedPromise('Data 1', 1000),
    delayedPromise('Data 2', 2000), 
    delayedPromise('Data 3', 1500),
    delayedPromise('Data 4', 500),  
    delayedPromise('Data 5', 3000)  
];

Promise.all(delayedPromises)
    .then((result) => {
        console.log('Promise results:', result);
    })
    .catch((error) => {
        console.error('Error occured:', error);
    });
//Task 2
const randomDelay =(value)=> {
    const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000; // Випадкова затримка від 1000 до 5000 мс
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}

const randomPromises = [
    randomDelay('promise 1'),
    randomDelay('promise 2'),
    randomDelay('promise 3'),
    randomDelay('promise 4'),
    randomDelay('promise 5')
];

Promise.race(randomPromises)
    .then((result) => {
        console.log('Найшвидший результат:', result);
    })
    .catch((error) => {
        console.error('Сталася помилка:', error);
    });