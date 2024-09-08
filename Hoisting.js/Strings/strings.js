let firstName = "Aditya";
console.log(typeof(firstName));

let secondName = "Agarwal";
console.log(typeof(secondName));

let sentance = "My name is 'aditya pratap singh' and my fav color is red";
console.log((sentance));
//escape sequences
let sentence1 = "My name is \"Aditya\" and my fav color is is blue";
console.log(sentence1);

let words = 'It\'s alright';
console.log(words);

console.log(firstName.length);

//string as object
let fullNamelitteral = "Aditya Pratap singh";
console.log(typeof(fullNamelitteral));//string

let fullName = new string("Aditya pratap singh");
console.log(fullName);
console.log(typeof(fullName));//object


console.log(fullNamelitteral == fullName);
console.log(fullName === fullName);//false

let color1 = new string("red");
let color2 = new string("red");
console.log(color1 === color2);

//In js comparing two objects result is false.


