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
