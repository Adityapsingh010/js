//default parameters.
function sum(a,b = 1){
    return a + b;
}

const result = sum(2);
console.log(result);

// Spread Syntax

function multiply(a,b){
    return a * b;
}

const array = [2,3];

const mul = multiply(...array);
console.log("Multiplication Result",mul);

const arr = [1, 2, 3];

const obj = {...arr};

console.log("Object", obj);

//Rest Parameters.

function SumOfallNumbers(...args){
    let sum = 0;

    for (let value of args){
        sum = sum + value
    }
    
    return sum;
}

const resultOfSum = SumOfallNumbers(1, 2, 3, 4, 5);

console.log("Sum of all numbers", resultOfSum);

