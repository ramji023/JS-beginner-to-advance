// day 08 - today we are going to discuss about IIFE(Immediately Invoked function expression)

const privateCounter = (() => {
     let count = 0;
     console.log(`initial value : ${count}`)
     return ()=>{
        count +=1;
        console.log(count);
     }
})();

privateCounter();
privateCounter();
privateCounter();
