"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//1.Number 
var a = 10; //2. String

var x = "hello world"; //3. Boolean

var y = true; // 4. null

var z = null; // 5. undefined

var age; // 6. Bigint

var bigInt = BigInt(10000000000000000000); // 7. Symbol

var value = Symbol("123"); // 8. Object

var user = {
  name: "Anshika",
  age: 23
}; // Where you defining the object.

var fruits = ["mango", "apple", "guava", "orange"];

_typeof(fruits);