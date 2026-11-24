
class Human {
    constructor(name, age, job, city) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.city = city;
    }

    showInfo() {
        document.getElementById("name").innerHTML = `نام: ${this.name}`;
        document.getElementById("age").innerHTML = `سن: ${this.age}`;
        document.getElementById("job").innerHTML = `شغل: ${this.job}`;
        document.getElementById("city").innerHTML = `شهر: ${this.city}`;
    }
}

class Student extends Human {
    constructor(name, age, job, city) {
        super(name, age, job, city);
    }
}

let name = prompt("نام خود را وارد کنید:");
let age = prompt("سن خود را وارد کنید:");
let job = prompt("شغل خود را وارد کنید:");
let city = prompt("شهر خود را وارد کنید:");

let student1 = new Student(name, age, job, city);

student1.showInfo();


