"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var a = 100; //block scoped

var z; //you can initialize and can declare later.

z = 67;
var x = 89; // block scoped
//but const cannot initialize and declare later.

a = 78; //Assignment to constant variable is not allowed.

{
  var y = 89;
  console.log(y);
}
console.log(x);
var fruits = ['guava', 'mango', 'apple']; //const keyword is used to unique reference

fruits[0] = "banana";
fruits = (_readOnlyError("fruits"), []);