// Day 4 -  we are going to learn about promises



// why we need promises ?? we have already callback and callback hell
// function task_01(callback) {
//    setTimeout(() => {
//       console.log('task 1 completed')
//       callback();
//    }, 2000)
// }
// function task_02(callback) {
//    setTimeout(() => {
//       console.log('task 2 completed')
//       callback();
//    }, 1000)
// }
// function task_03(callback) {
//    setTimeout(() => {
//       console.log('task 3 completed')
//       callback()
//    }, 100)
// }
// function task_04(callback) {
//    setTimeout(() => {
//       console.log('task 4 completed')
//       callback()
//    }, 4000)
// }
// function task_05() {
//    console.log('task 5 completed')
// }
// task_01(() => {
//    task_02(() => {
//       task_03(() => {
//          task_04(() => {
//             task_05();
//          });
//       });
//    });
// });
// its hard to handle and maintain callback hell that is why we have promises 

//same problem we are going to solve using promises
// function task_01() {
//    return new Promise((resolve) => {
//       setTimeout(() => {
//          console.log('task 1 completed')
//          resolve();
//       }, 2000)
//    })
// }

// function task_02() {
//    return new Promise((resolve) => {
//       setTimeout(() => {
//          console.log('task 2 completed')
//          resolve();
//       }, 2000)
//    })
// }

// function task_03() {
//    return new Promise((resolve) => {
//       setTimeout(() => {
//          console.log('task 3 completed')
//          resolve();
//       }, 2000)
//    })
// }

// function task_04() {
//    return new Promise((resolve) => {
//       console.log('task 4 completed')
//       resolve();
//    })
// }

// function task_05() {
//    return new Promise((resolve) => {
//       setTimeout(() => {
//          console.log('task 5 completed')
//          resolve();
//       }, 3000)
//    })
// }

// task_01()
//    .then(task_02)
//    .then(task_03)
//    .then(task_04)
//    .then(task_05)



// now take two promises first one run synchronous and second one run asynchronous
// const test_01 = () => {
//    console.log("test 01 start")
//    const p = new Promise((resolve, reject) => {
//       console.log('test 01 completed')
//       resolve();
//    })
//    return p
// }

// const test_02 = () => {
//    console.log("test 02 start")
//    const p = new Promise((resolve, reject) => {
//       setTimeout(() => { console.log('test 02 completed'); resolve() }, 2000)
//    })
//    return p;
// }
// test_01().then(()=>test_02())


// another example of chain of promise
// function delay(time) {
//    return new Promise((resolve, reject) => {
//       setTimeout(resolve, time);
//    })
// }
// delay(1000).then(
//    () => {
//       console.log("step 2 after 1000ms")
//       return delay(500);
//    }
// ).then(
//    () => {
//       console.log("step 3 after 500ms")

//    }
// ).then(
//    () => {
//       console.log("step 4 next job")
//       return delay(300);
//    }
// ).then(
//    () => {
//       console.log("step 5 after 300")
//    }
// )


// direct use methods of promise
// const task_01 = () => {
//    return Promise.resolve("task 1 is complete")
// }

// const task_02 = () => {
//    return Promise.resolve("task 2 is complete")
// }


// const task_03 = () => {
//    return Promise.reject("task 3 failed")
// }

// task_01().then((data) => {
//    console.log(data);
//    return task_02()
// }).then((data) => {
//    console.log(data);
//   return task_03()
// }).catch((error) => {
//    console.log(error);
// })




// const checkUser = (userExists) => {
//    if (userExists) {
//        return Promise.resolve("User found!");
//    } else {
//        return Promise.reject("User not found!");
//    }
// };

// // user exist
// checkUser(true).then(console.log).catch(console.error);

// //  user does not exist
// checkUser(false).then(console.log).catch(console.error);




 