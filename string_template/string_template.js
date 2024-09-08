//Template literal
//it supports multiple line strings
//let institute = "Internshala";
//string template support multiline string also

//let sentence = `My hobby
//is listening music`;

let firstName = "Ankit";
let lastName = "Gupta";

let WelcomeMessage = `Welcome ${firstName} ${lastName}`;//interpolation


console.log(WelcomeMessage);

let num1= 10;
let num2= 20;

let addition = `Sum of the two numbers is ${num1 + num2}`;

console.log(addition);


const greet = (name = 'Guest') => hello, ${name}!;

console.log(greet('Aditya')); // Output: Hello, Aditya!

console.log(greet()); // Output: Hello, Guest!