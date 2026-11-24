
class Human {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
}

class Student extends Human {
    constructor(name, lastname) {
        super(name, lastname);
    }
}

// دریافت اطلاعات
let inputt1 = prompt("Enter your name:");
let inputt2 = prompt("Enter your lastname:");

let inputt3 = prompt("Enter your name:");
let inputt4 = prompt("Enter your lastname:");

let inputt5 = prompt("Enter your name:");
let inputt6 = prompt("Enter your lastname:");

let inputt7 = prompt("Enter your name:");
let inputt8 = prompt("Enter your lastname:");

let inputt9 = prompt("Enter your name:");
let inputt10 = prompt("Enter your lastname:");

let inputt11 = prompt("Enter your name:");
let inputt12 = prompt("Enter your lastname:");

let inputt13 = prompt("Enter your name:");
let inputt14 = prompt("Enter your lastname:");

let inputt15 = prompt("Enter your name:");
let inputt16 = prompt("Enter your lastname:");

// ساخت دانشجوها
let student1 = new Student(inputt1, inputt2);
let student2 = new Student(inputt3, inputt4);
let student3 = new Student(inputt5, inputt6);
let student4 = new Student(inputt7, inputt8);
let student5 = new Student(inputt9, inputt10);
let student6 = new Student(inputt11, inputt12);
let student7 = new Student(inputt13, inputt14);
let student8 = new Student(inputt15, inputt16);

// آرایه دانشجوها
let students = [
    student1, student2, student3, student4,
    student5, student6, student7, student8
];

// نمایش اطلاعات
document.getElementById("students").innerHTML =
    students.map((student, index) => `
        <div class="student-card">
            <div class="avatar">👨‍🎓</div>
            <h2>Student ${index + 1}</h2>
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Lastname:</strong> ${student.lastname}</p>
        </div>
    `).join("");
