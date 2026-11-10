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
// const firstName = prompt("Enter Your Name");
// const userInput = prompt("Enter Your Age");
// let age = parseInt(userInput);
// if(isNaN(age)){
//     age = parseInt(prompt("Please Enter Your Age Correctly"));
// }else{
//     console.log("Damet Garm Ke Senet Ro Dorost Vared Kardi");
// }
// const year = 2026 - age;

// document.write(`Hello ${firstName}, you born in ${year}`);

// Third Js Session
// if(10 === 100){
//     if(){

//     }
// }else if(10 == 1020){
//     console.log("Equal To 100");
// }else {
//     console.log("Is Not Equal To 10 And 100");
// }

// let number = 1000;
// switch(number){
//     case 10:
//         console.log("Is Equal");
//         break;
//     case 100:
//         console.log("Equal To 100");
//         break;
//     default:
//         console.log("Is Not Equal To 10 And 100");
// }

// function sum(firstNumber, secondNumber){
//     return firstNumber + secondNumber;
// }

// let output = sum(10, 50);
// console.log(output);

// for(let i = 0; i < 100; i++){
//     console.log(i);
// }

// let i = 0;
// while(i < 100){
//     console.log(i);
//     i++;
// }

// let i = 0;
// do{
//     if(i === 0){
//         console.log("Loop Started");
//     }else{
//         console.log(i);
//     }
//     i++;
// }while(i < 100)

// let usersList = [
//     {
//         firstName: "Alireza",
//         email: "alireza@gmail.com"
//     },
//     {
//         firstName: "Parsa",
//         email: "parsa@gmail.com"
//     }
// ];

// console.log(usersList[0].firstName);

// Fourth Js Session
// function printer(value){
//     console.log(value);
//     document.write(value);
// };

// function sum(first, second, third){
//     let sum = first + second;

//     third(sum);
// }

// sum(10, 10, printer);

// let usersList = ["Alireza", "Parsa", "Mamareza"];
// usersList[usersList.length] = 'Mamad';

// delete usersList[0];
// console.log(usersList);

// let sum = () => {
//     return "hello"
// };
// console.log(sum);

// let scores = [20, 18, 10, 12, 15];

// scores.map((score) => {
//     console.log(score);
// });

// let btn = document.getElementById('btn');
// window.addEventListener('click', (e) => {
//     console.log(e);
// });

// let userName = prompt('Enter Your Name');
// let obj = {
//     name: "Alireza"
// }
// let arr = ["mamad", "reza", "parsa"]

// let serialized = JSON.stringify(obj);

// localStorage.setItem("user1", serialized);

// let user = localStorage.getItem("user");
// console.log(JSON.parse(user));

// localStorage.removeItem('user2');

// console.log(localStorage.length);

// let tasks = ['First Task', 'Second Task', 'Third Task'];

// console.log(JSON.parse(localStorage.getItem('tasks')).length);

/* Timeout and Interval */

// let cancelBtn = document.getElementById('btn');

// const timeout = setTimeout(() => {
//     console.log("Hello World");
// }, 5000);

// cancelBtn.addEventListener('click', () => {
//     clearTimeout(timeout);
// });

// let second = 55;
// let minutes = 1;
// const interval = setInterval(() => {
//     console.log(minutes + ":" + second);
//     if(second === 60){
//         minutes++;
//         second = 1;
//     }else{
//         second++;
//     }
// }, 1000);

// let cancelBtn = document.getElementById('btn');

// cancelBtn.addEventListener('click', () => {
//     clearInterval(interval);
// });

/* Callback Function */
// function greet(name, callback){
//     const text = `Hello ${name}`;
//     callback(text);
// }

// function print(value){
//     console.log(value);
//     document.write(value);
// }

// greet("Alireza", print);

/* Promise */
// let products = new Promise((resolve, rejected) => {
//     let users = [];
//     let request = fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => {
//             users = response.json();
//         })
// });

const getUsers = async () => {
    let users = [];
    await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            users = response.json();       
        });
    
    return users;
}

getUsers().then((response) => {
    console.log(response);
}).then().catch;