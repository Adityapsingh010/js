var a = function(){
     console.log("a is a function");
}

function x() {
    console.log("x is a function");
}

function y(){
    return x;
}
// we can call one function in another function.
const func = y(x);
func();