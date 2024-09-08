//self invoking functions
(function hello(){
    console.log("Hello");
})();

(function abc(){
    var a =10;
    console.log("The value of a is",a);
})();

//self invoked function
(function rko(){
    var b = "Rko" 
    console.log("The Randy Orton is here for",b);
})();

// self invoked function
(function rko(){
    var c = 10;
    var d = 20;
    var e = c+d;
    console.log("The value of e is",e);
})();