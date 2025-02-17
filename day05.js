// day 05 - today we will discuss about async-await


// so first we will see we already handling asynchronously tasks then why should we use async-await

function task_01() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('task 1 completed')
            resolve();
        }, 2000)
    })
}

function task_02() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('task 2 completed')
            resolve();
        }, 2000)
    })
}

function task_03() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('task 3 completed')
            resolve();
        }, 2000)
    })
}

function task_04() {
    return new Promise((resolve) => {
        console.log('task 4 completed')
        resolve();
    })
}

function task_05() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('task 5 completed')
            resolve();
        }, 3000)
    })
}

// task_01()
//     .then(task_02)
//     .then(task_03)
//     .then(task_04)
//     .then(task_05)

// in above example we can see its very hard to handle promise chain if there are more asynchronous tasks

// lets solve same exmaple with using asy-await

async function handleAllTasks() {
    await task_01();
    await task_02();
    await task_03();
    await task_04();
    await task_05();
}
handleAllTasks();

// its very easy to maintain asynchronous task using async-await ... even we can catch error using try{}catch(){}

// async function handleAllTasks() {
//     try{
//         await task_01();
//         await task_02();
//         await task_03();
//         await task_04();
//         await task_05();
//     }catch(error){
//         console.log(error);
//     }
   
// }
// handleAllTasks();
