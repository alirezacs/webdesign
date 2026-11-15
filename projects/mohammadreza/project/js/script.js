
let users = [];

function showUsers(list = users) {
    let userList = document.getElementById("userList");

    userList.innerHTML = "";

    list.forEach(function(user, index) {
        let li = document.createElement("li");

        li.innerHTML = user.name + " - " + user.email;

        let btn = document.createElement("button");
        btn.innerText = "Delete";
        btn.className = "delete";

        btn.onclick = function() {
            users.splice(index, 1);
            showUsers();
        };

        li.appendChild(btn);
        userList.appendChild(li);
    });
}

function addUser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("age").value;

    if (name === "" || age === "") {
        alert("لطفا نام و سن  خود را وارد کنید!");
        return;
    }

    users.push({
        name: name,
        email: email
    });

    showUsers();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";

    let oldtask = localStorage.getItem(`users`) || "[]";
    let old = JSON.parse(oldtask);
    old.push(name);

    let newtasks = JSON.stringify(old)
}

function searchUser() {
    let search = document.getElementById("search").value.toLowerCase();

    let result = users.filter(function(user) {
        return user.name.toLowerCase().includes(search);
    });

    showUsers(result);
}
    else {
            let oldtask = localStorage.getItem('users') || "[]";
    let old = JSON.parse(oldtask);
    old.push(name);

    let newtasks = JSON.stringify(old);
localStorage.setItem('users' , newtasks);
    }