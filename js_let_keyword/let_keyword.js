// ES6 -- EcmaScript 2015

//var b = 100;
//let x = 34;

{
    var a = 100;// Global scoped variable.
                // we can assign it again.
    let z = 67;//let variable only accessible in this block.
               //let variable cannot be redeclare to a variable in same scope. let z = 67;
               //let variable is block-scoped.
               //let variable value can be assigned. z= 89.
    console.log(z);//not outside the block.
}

console.log(a);//var variable accessible outside this block.
console.log(z); // Error: z is not defined
 
