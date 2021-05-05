// Functions: -Buildinng blocks of programming language
console.log("This is tutorial 53");


// Defining the function 
function greet(name, GreetText = "Greetings from JS") {
    let name1 = "Name1"; // Local variable
    console.log(GreetText + " " + name);
    console.log(name + " is a good boy");
}
let name = "Shivam";
let name1 = "Rohan";
let name2 = "Sagar";
let name3 = "Shubham";
let name4 = "Aniket";
// calling the function
let GreetText  = "Good Morning";
greet(name,GreetText); 
greet(name1,GreetText);
greet(name2,GreetText);
greet(name3);
greet(name4,GreetText);
let returnVal = greet(name1);
console.log(returnVal); // prints undefined because the function does not return anything
// console.log(name +" is a good boy");
// console.log(name1 +" is a good boy");
// console.log(name2 +" is a good boy");
// console.log(name3 +" is a good boy");
// console.log(name4 +" is a good boy");

function sum(a,b,c) {
    let d = a + b + c;
    return d;  // returns the value of d
    // This line will never execute (Unreachable code)
    // console.log("Function Returned");
}

let returnVal = sum(12,23,34);
console.log(returnVal);




