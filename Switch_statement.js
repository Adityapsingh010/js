//let dayNumber = new Date().getDay();

let dayNumber = 4;

console.log("day number", dayNumber);
let day;
let msg;

//based on day number , give the day

switch(dayNumber){
    case 0:
        day = "Sunday";
        console.log("day number", dayNumber);
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;//This break statement is not necessary as the case statements are exhaustive. But it's a good practice to include it.
    case 6:
        day = "Saturday";
        break;    
        
   

    
} 

console.log("Day of the week is",day);


