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

// const getUsers = async () => {
//     let users = [];
//     await fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => {
//             users = response.json();       
//         });
    
//     return users;
// }

// getUsers().then((response) => {
//     console.log(response);
// }).then().catch;

// let marker = {
//     color: "Green",
//     size: 12,
//     isWhiteBoard: true,
//     write: () => {
//         console.log("Ok");
//     }
// }

let users = ["Alireza", "Mamareza", "Parsa", "Alireza", "Parsa", "Elyana", "Arezoo", "Vania", "Zhina"]
// let users2 = ['jafar', 'mamad', 'asghar']

// users.toString()
// users.join("test")
// users.pop();
// Array.isArray(users)
// delete users[0]
// users.concat(users2)
// users.slice(0, 4)

// users.find((user) => {
//     if (user === "Alireza"){
//         console.log(user);
//     }
// })

// users.map((user) => {
//     console.log(user);
// })

// let btn = document.getElementById("btn");
// btn.addEventListener("click", async () => {
//     try{
//         const response = await axios.get("https://jsonplaceholder.typicode.com/users");

//         console.log(response.data);
        

//     }catch(error){
//         console.log(error);
        
//     }
// })

/* Validation in JS */
// let form = document.getElementById('form');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;
//     let phone = document.getElementById('phone').value;

//     if(password.length < 8){
//         alert("Password is to Short");
//         return;
//     }

//     if(!email.includes('@')){
//         alert("Email Is Incorrect");
//         return;
//     }

//     var regex = new RegExp('^(\\+98|0)?9\\d{9}$');
//     var result = regex.test(phone);

//     if(!result){
//         alert('Phone is Incorrect')
//         return;
//     }

//     let obj = {
//         name: "Alireza",
//         hello: () => {
//             console.log(this.name);
//         }
//     }
    
//     obj.hello();
    
//     const regex = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;
//     if(!regex.test(email.trim())){
//         alert("Email Is Incorrect");
//     }
        
// })


/* OOP in JS */
// class Car{
//     constructor(name, brand, color, tireCount){
//         this.name = name;
//         this.brand = brand;
//         this.color = color;
//         this.tireCount = tireCount;
//     }

//     move(){
//         console.log("Car Moved!");
//     }
//     showDetails(){
//         console.log(`Name of This Car is ${this.name}`);
//     }
// }

// let benz = new Car("Benz Cls-500", "Benz", "black", 4);
// let bmw = new Car("BMW M5", "BMW", "white", 4);

// bmw.showDetails(); 
// benz.showDetails();

// class Human{
//     fName = "Mohammadreza"
//     lName
//     email

//     move(){
//         console.log("Moved!");
//     }
// }

// let mohammadReza = new Human();

// console.log(mohammadReza.fName);

/* Constructor */
// class Human{
//     constructor(firstName, lastName, email){
//         this.fName = firstName;
//         this.lName = lastName;
//         this.email = email;
//     }

//     #fName
//     lName
//     email

//     move(){
//         console.log(`${this.fName} ${this.email} was Moved`);
//     }
// }

// let mohammadReza = new Human("MohammadReza", "Akbarpoor", "mohammad@gmail.com");

// mohammadReza.move();


// class BankAccount{
//     constructor(balance){
//         this.balance = balance
//     }

//     #balance

//     get getBalance(){
//         return this.balance;
//     }
//     set setBalance(value){
//         this.balance = value;
//     }

//     increaseBalance(value){
//         this.balance += value;
//     }
// }

// let zhina = new BankAccount(2000000);
// zhina.setBalance = 9000000;
// console.log(zhina.getBalance);

/* Inheritance */
// class Human{
//     fullName

//     move(){
//         console.log("Moved!");
//     }
// }
// class Student extends Human{
//     CodeDaneshjooyi
// }

// let parsa = new Student();

// class Product{
//     constructor(title, stock){
//         this.title = title;
//         this.stock = stock;
//     }
//     title
//     stock

//     order(){
//         console.log("Product Order Created");   
//     }
// }

// class Plan extends Product{
//     constructor(title, stock){
//         super(title, stock);
//     }
//     createDate
    
//     getExpire(){

//     }

//     order(){
//         console.log("Plan Opened");
//     }
// }

// class TEST extends Plan{

// }

// class Fruit extends Product{
//     order(){
//         console.log("Fruit Was Ordered");
//     }
// }

// let plan = new Plan("First Plan", 10);
// plan.order();

/* Polymorphism */
class Calculate{
    sum(first, second){
        console.log(first, second);
    }

    sum(first, second, third){
        console.log(first + second + third);
    }
}

let calc = new Calculate();


calc.sum(10, 20);