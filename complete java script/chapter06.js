/**
  In this chapter, we’ll be covering the following:
 Booleans
 logical operators
 comparison
 flow control
 if–else statements
 a favorite animal quiz
 switch statements
 a rock paper scissors game
 */

var answer = 42


// soft equality
console.log(answer == '42');
console.log(answer == 42)

//hard equality
console.log(answer === 42)
console.log(answer === '42')


//if-else statement
var energy = 19
if (energy < 13) {
    console.log("I am tired...zzz...")
} else {
    console.log("I am a superman")
}

//ternary operator
energy = 9
energy < 13 ? console.log("I am tired...zzz...") : console.log("I am a superman")



//switch operator
const legs = Number(prompt('How many legs does your favorite animal have?'));
switch (legs) {
    case 0:
        alert('Your favorite animal is a fish!');
        break;
    case 2:
        alert('Your favorite animal is a penguin!');
        break;
    case 4:
        alert('Your favorite animal is an elephant!');
        break;
    case 8:
        alert('Your favorite animal is an octopus!');
        break;
    default:
        alert(`I'm not sure what animal has that many legs!`);
}