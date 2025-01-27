// <---------------  learn about callback and callback hell  ------------------------->






// <----------   example 01   ------------->
function fetchData_1() {
    setTimeout(() => {
        console.log("data fetch 01 successfully")
    }, 5000)
}

function fetchData_2(callback) {
    if (callback) callback()
    console.log("data fetch 02 successfully");
}

function fetchData_3(callback) {

    setTimeout(() => {
        console.log("data fetch 03 successfully")
        if (callback) callback()
    }, 2000)
}

function printData(callback) {
    if (callback) callback()
    console.log("print data successfully")
}

printData(() => {
    fetchData_3(() => {
        fetchData_2(() => {
            fetchData_1()
        })
    })
})








// <----------    example 02   --------->

const callback_hell = () => {
    setTimeout(() => {
        console.log("step 1")
        setTimeout(() => {
            console.log("step 2");
            setTimeout(() => {
                console.log("step 3");
            })
        }, 2000)
    }, 1000)
}

callback_hell()








// <------   example 03   -------->
function printName(name, callback) {
    console.log(`the name is ${name}`);
    callback()
}

function printAge(age) {
    console.log(`her age is ${age}`);

}

function printResult(callback) {
    callback()
    console.log(`process completed!!`)
}

printResult(() => {
    printName("john cena", () => {
        printAge(34)
    })
})



//  <---------- example 04  ------------>


function getMarks(callback) {
    console.log("Mam: First give the exam to get marks");
    callback(); // Go to the next step after giving the exam
}

function giveExam(callback) {
    console.log("Exam Member: First pay the fees to give the exam");
    callback(); // Go to the next step after paying fees
}

function payFees(callback) {
    console.log("Paying fees...");
    callback(); // Go back to the exam after paying fees
}

// Start the chain of events
payFees(() => {
    giveExam(() => {
        getMarks(() => {
            console.log("Bob gets his marks from mam.");
        });
    });
});
