
let a = 100;//block scoped

let z;//you can initialize and can declare later.

z=67;

const x =89;// block scoped
            //but const cannot initialize and declare later.

a= 78;//Assignment to constant variable is not allowed.

{
    const y = 89;
    console.log(y); 
}

console.log(x);


const fruits =['guava','mango','apple'];
//const keyword is used to unique reference
fruits[0] = "banana";//we can update any variable and array.
console.log(fruits);

//fruits=[1,2,3,];

//we can use const for declaring objects.
const user ={firstName:"Anshika",lastname:"Agarwal"}

user.hobby = "teaching";

console.log(user);

user = {};//we cannot redeclare



