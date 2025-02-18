// // day 09 - today we are going to learn about classes and factory functions

// class Pizza {
//     constructor(pizzaType) {
//         this.type = pizzaType;
//         this.size = "medium";
//         this.crust = "original";
//         this.topping = [];
//     }
//     // get pizzaSize() {
//     //  return this.size;
//     // }
//     // set pizzaSize (pizzaSize){
//     //     this.size = pizzaSize;
//     // }
//     getSize() {
//         return this.size;
//     }   
//     setSize(pizzaSize) {
//         this.size = pizzaSize;
//     }

//     getToppings() {
//         return this.topping;
//     }
//     setToopings(topping) {
//         this.topping.push(topping);
//     }
//     bake() {
//         console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza.`)
//     }
// }

// const myPizza = new Pizza("pepperoni");
// myPizza.bake();

// // console.log(myPizza.type)
// // myPizza.type ="supreme"  // can change the value using dot notation
// // console.log(myPizza.type)
// // myPizza.bake()



// // myPizza.pizzaSize = "large";
// // console.log(myPizza.pizzaSize)
// // myPizza.bake();



// // myPizza.setSize("large");
// // console.log(myPizza.getSize())
// // myPizza.bake();

// // myPizza.setToopings("Onion");
// // myPizza.setToopings("cheese");
// // myPizza.setToopings("chilli");
// // console.log(myPizza.getToppings());



// class Pizza {
//     constructor(pizzaSize) {
//         this._size = pizzaSize;
//         this._crust = "origional";
//     }
//     getCrust() {
//         return this._crust;
//     }
//     setCrust(pizzaCrust) {
//         this._crust = pizzaCrust
//     }
// }

// class SpecialtyPizza extends Pizza {
//     constructor(pizzaSize) {
//         super(pizzaSize);
//         this.type = "The Works"
//     }
//     slice(){
//         console.log(`Our ${this.type} ${this.size} pizza has 8 slices`)
//     }
// }
// const mySpecialtyPizza = new SpecialtyPizza("original")
// mySpecialtyPizza.slice();





// factory functions
// function pizzaFactory(pizzaSize) {
//     const crust = "original";
//     const size = pizzaSize;
//     return {
//         bake: () => { console.log(`Baking a ${size} ${crust}  crust pizza.`) }
//     }
// }

// const myPizza = pizzaFactory("small")
// myPizza.bake();



// private methods
class Student {
    #class = 8;
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(`${this.name} in ${this.class}.`)
    }
}
const myStudent = new Student("ram ji mishra");
myStudent.printName()
console.log(myStudent.name);
console.log(myStudent.#class); // it is a private assest








