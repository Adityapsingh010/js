//function.
//Function is a piece of code and the block of code which implements to perform specificic tasks.
//function -- it is the keyword to declare any function.

function sum(num1,num2){
    //block of code
    return num1 + num2;// return is result of the function
}

const result =  sum(2,5);
const result2 = sum(2,6);

// call the function

console.log("result ", result);// 7
console.log("result2 ", result2);

function hello() {
    let greeting = hello();
    console.log(greeting);
}
hello();
