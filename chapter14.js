/**
 * We’ll be covering the following topics:
 copying objects in JavaScript
 object-oriented programming
 encapsulation
 polymorphism
 inheritance
 classes in JavaScript
 extends
 */


//<------------------ Copying Objects in JavaScript  ----------------->
const papa = {
    name: 'Papa Bear',
    type: 'bear',
    color: 'brown',
    food: 'porridge',
    size: 'large'
};
 
const mama = papa    // here the problem is that we have not actually copied the papa object . the variable mama & papa both refrence exactly the same object
console.log(papa);
console.log(mama);
mama.name = "Mama Bear"  
console.log(papa.name) // here you see its update

// so we should copy object like this
const aman = {...papa}
console.log(aman)
aman.name="Aman Bear"
console.log(papa.name)  // here you see the result its not update

// smae issue persist with array and functions . that is why always used ... spread operator to shallow copy

