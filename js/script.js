// document.write("Hello World");
// document.writeln("Hello World");


// console.log("Hello World");
// console.warn("Hello World");
// console.error("Hello World");
// console.log("Hello World");

// Single Line Comment

/*
    Multiple Line Comment
*/

// Variable
// var name = "Alireza";
// let family = "Mardani";

// let isMarried = false;

// isMarried = true;

// let human = {
//     age: 12,
//     name: "mamareza"
// };

// Constant
// const license = "123456789";

// console.log(typeof human);

// Template String ``
// let description = "Hello my family is" + family + "my age is " + age + "my married status is " + isMarried;
// let description = `Hello my family is ${family} my age is ${age} my married status is ${isMarried}`;

// let age = window.prompt("Enter your age:");

// console.log(`your age is ${age}`);

// Prompt
const firstName = prompt("Enter Your Name");
const userInput = prompt("Enter Your Age");
let age = parseInt(userInput);
if(isNaN(age)){
    age = parseInt(prompt("Please Enter Your Age Correctly"));
}else{
    console.log("Damet Garm Ke Senet Ro Dorost Vared Kardi");
}
const year = 2026 - age;

document.write(`Hello ${firstName}, you born in ${year}`);
