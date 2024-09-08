let text = "Hello John!! Hello" ;

console.log("length of string is ",text.length);

//Strings are immutable ----- original string doesnot change.

// but we can change them through the below methods.
const replacedString =  text.replace("Hello", "Hii");

console.log(text);
console.log(replacedString);

const replaceAllString = text.replaceAll("Hello","Hii");
console.log(replaceAllString);

//Split Method

const SplitString = text.split(" ");
console.log(SplitString);

let random = "aditya, webdeveloper";
const randomStringSplit = random.split(",");

console.log(randomStringSplit);

//repeat 
console.log(text.repeat(2));

//trim
const trimmedString = text.trim();
console.log(trimmedString);

const trimStart = text.trimStart();
console.log(trimStart);

//concat
let firstName = "Aditya";
let lastName = "Pratap Singh";

firstName.concat(lastName);

