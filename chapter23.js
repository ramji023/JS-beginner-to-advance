// <-------------   learn about Async/Await   ------------>

// suppose we have a promise
const fetchData_1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data fetch 01 successfully");
            resolve()
        }, 5000)
    })
}

const fetchData_2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data fetch 02 successfully");
            resolve()
        }, 1000)
    })
}

const fetchData_3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data fetch 03 successfully");
            resolve()
        }, 0)
    })
}


// see here every function return Promise so instead of  using chaining of Promises using .then() and .catch() handle chaining and improve readibility use async await
const printData = async () => {
    try {
       await fetchData_1()
       await fetchData_2()
        await fetchData_3()
        console.log("data fetch  successfully");
    } catch (err) {
        console.log(err);
    }
}
printData()