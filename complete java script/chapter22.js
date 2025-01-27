// <----------  learn about Promise ---------------->

// callback

// function getMarks(callback) {
//     console.log("Mam: First give the exam to get marks");
//     callback(); // Go to the next step after giving the exam
// }

// function giveExam(callback) {
//     console.log("Exam Member: First pay the fees to give the exam");
//     callback(); // Go to the next step after paying fees
// }

// function payFees(callback) {
//     console.log("Paying fees...");
//     callback(); // Go back to the exam after paying fees
// }

// // Start the chain of events
// payFees(() => {
//     giveExam(() => {
//         getMarks(() => {
//             console.log("Bob gets his marks from mam.");
//         });
//     });
// });





// <---------     Promises      --------------->

// example 01
const getMarks = () => {
    return new Promise((resolve, reject) => {
        resolve(console.log("Mam: First give the exam to get marks"))
    })
}
const giveExam = () => {
    return new Promise((resolve) => {
        resolve(console.log("Exam Member: First pay the fees to give the exam"))
    })
}
const payFees = () => {
    return new Promise((resolve) => {
        resolve(console.log("Paying fees..."));
    })
}

payFees()
    .then(() => giveExam())
    .then(() => getMarks())
    .then(() => console.log("Bob gets his mark form mam"))
    .catch((error) => {
        console.error("An error occurred:", error);
    });





// example 02
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

fetchData_1()
    .then(() => fetchData_2())
    .then(() => fetchData_3())

