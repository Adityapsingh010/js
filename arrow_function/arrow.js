//ES5
function sums(a,b){
  return a + b;
}

//ES6
const sum = (a,b) => a + b;;//we dont need function in arrow function.


const result = sum(2 , 4);
console.log("result",result);

//if code is more than a two line.
const sumsa = (a,b) => {
    console.log("sum of two numbers is");
    return a + b;
}


//syntax:
const gfg = () =>{
    console.log("Hello World!");
    return "Hello World!";
}

//2. Arrow function without parameters
  
const gfgo = () =>{
    console.log("Hello World!");
    return "Hello World!";
}
gfg();

//3. Arrow function with single parameter
const square = a => a*a;
console.log(square(5));

//4. Arrow function with Multiple parameters

const Addition = (a,b,c) => {
    console.log(a+b+c);
}
Addition(5,6,7);

//Arrow function with default parameters

const add = (a,b,c,d=40) => {
    console.log(a+" "+b+ " "+c+" "+d);
}

add(5,6,7);

//Return Object literals

const makeperson = (firstname,lastname)=>
({first:firstname, last:lastname});
console.log(makeperson("John","Doe"));


