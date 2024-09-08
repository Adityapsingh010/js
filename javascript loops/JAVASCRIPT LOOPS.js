// for loop
//for in
// for of
// do while

//for(let i = 0; i <= 100; i++){
//    console.log(i);//1 2 3 .... 100;
//}

// This is how we declare object inside javascript.

const user  = {harry:56, akash:67, suraj: 70};

for(let key in user){
    console.log(key, user[key]);
}

// for of loop


const fruits = ["apple", "banana", "orange"];

for(let fruit of fruits){
    console.log(fruit);
}

//while loop

let value = 1;

while(value<10){
    console.log(value);
    value++;
}
//do while loop
//we uses do while where want execute our atleast once.

let num = 1;

do{
    console.log(num);
    num++;
}while(num < 5);
