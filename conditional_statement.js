// Use if to execute a block of code if condition is true.
// Use if to execute a block of code if condition is false.
// Use else if to basically check any new condition.
// swicth statements.

let num = 5;

if(num > 0){
    console.log("Number is positive");
} 
else{
   console.log("Number is negative");
}

//print grade of students, marks > 90 'A', marks > 80 and marks <=90 --> 'B'
//marks > 70  and marks <=80 'C', and below this ---->Fail.


marks = 90;

if(marks >= 90){
    console.log("Grade: A");
}

else if(marks > 80 && marks <= 90){
    console.log("Grade: B");
}

else if(marks > 70 && marks <= 80){
    console.log("Grade: C");
}

else{
    console.log("Fail");
}