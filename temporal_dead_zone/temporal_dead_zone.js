// Are let and const variable hoisted ?
//The Period when a variable is declared but not yet assigned a value.
//execution phase of javascript runtime Temporal Dead Zone occur.

let a = 100;// let and const stay in temporal dead zone till the value is given to them.
const c = 100;
var b = 20;
console.log(a); // 100
console.log(b); // undefined
console.log(c); // 100