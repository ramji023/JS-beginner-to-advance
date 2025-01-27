// object oriented programming
/**
 * encapsulation
 polymorphism
 inheritance
 */

// define class and object
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, My name is ${this.name}.`);
    }
}

const bob = new Person("Boblea", 23)  // create object of class Person
console.log(bob);
bob.greet()
console.log(bob.age)
var Bob
console.log(bob instanceof Person);  // check if it is a instanc of Person or not. it return boolean vlaue
console.log(Bob instanceof Person);



//  Inheritance in JavaScript
class Vehicle {
    start() {
        console.log("Vehicle is starting...");
    }
}

class Car extends Vehicle {
    start() {
        super.start(); // Call the parent class method
        console.log("Car is starting...");
    }
}

const car = new Car();
car.start();


class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call parent class's constructor before accessing this keyword
        this.breed = breed;
    }

    speak() {
        super.speak(); // Call the parent class's speak method
        console.log(`${this.name}, the ${this.breed}, barks.`);
    }
}

// Create an instance of the Dog class
const dog = new Dog("Rex", "German Shepherd");

// Outputs
dog.speak();

