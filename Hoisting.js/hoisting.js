//able to access variable before even declaring is called hoisting in javascript.
console.log(a);
var a=9;
console.log(a);

// able to access the function and variable before even declaring it.
greeting();
function greeting(){
    console.log("Hello");
}

greeting();

//fuction expression //arrow functions
var greeting = () => {
    console.log("Hello");
}
//greeting:undefined