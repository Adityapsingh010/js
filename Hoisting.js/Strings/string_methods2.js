let text = "A Hello John !!";

//ASCII codes A-Z 65
//in case of char and charat we cannot use the negative values.
console.log(text.charAt(6));
console.log(texconsolet.charCodeAt(6));
//In case of at we can use negative indexing.
console.log(text.at(-5));
console.log(text[2]);

text[2] = "Y"//This will no change any character in it.

console.log(text);

//slice
//If i will not give limit to them this will remove the given indexing character.

console.log(text.slice(2));
//if we will give limit to the, this will remove the character except between 2 and 8 characters.

console.log(text.slice(2,8));
//negative indexing, stats from the end.
console.log(text.slice(-6));

//substring(it doesnot take negative value if we give them,this will consider it as zero.)

console.log(text.substring(2));
console.log(text.substring(2,8));
console.log(text.substring(-6));// consider it as zero.

//substr

console.log(text.substr(0,4));

//lowercase conversion

console.log(text.toLowerCase());

//uppercase conversion

console.log(text.toUpperCase());



function reverseString(str){
    const reversedString1 =
    str.slice("").reduce((acc,char)=> char + acc, "");
    console.log(reversedString);
}


console.log(text.substr(0,4));
