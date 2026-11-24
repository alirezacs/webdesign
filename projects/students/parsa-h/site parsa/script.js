
// Elements
const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

const searchInput = document.getElementById("searchInput");
const gameCards = document.querySelectorAll(".game-card");
const filterBtns = document.querySelectorAll(".filter-btn");

const noResult = document.getElementById("noResult");

const modal = document.getElementById("gameModal");
const modalTitle = document.getElementById("modalTitle");
const closeModal = document.getElementById("closeModal");
const modalOk = document.getElementById("modalOk");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.innerHTML = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        themeBtn.innerHTML = "☀️";
        localStorage.setItem("theme", "dark");
    }

});


if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeBtn.innerHTML = "🌙";
}

menuBtn.addEventListener("click", function() {

    navbar.classList.toggle("show");

});

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {
        navbar.classList.remove("show");
    });

});

function updateClock() {

    const now = new Date();

    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("clock").innerHTML =
        hours + ":" + minutes + ":" + seconds;

}

updateClock();

setInterval(updateClock, 1000);


// 4. Game Search
searchInput.addEventListener("input", function() {

    filterGames();

});

let selectedCategory = "all";

filterBtns.forEach(function(btn) {

    btn.addEventListener("click", function() {

        filterBtns.forEach(function(item) {
            item.classList.remove("active");
        });

        btn.classList.add("active");

        selectedCategory = btn.getAttribute("data-filter");

        filterGames();

    });

});

function filterGames() {

    let searchText = searchInput.value.toLowerCase();

    let visibleCount = 0;

    gameCards.forEach(function(card) {

        let gameName = card.querySelector("h3").innerText.toLowerCase();

        let category = card.getAttribute("data-category");

        let matchesSearch = gameName.includes(searchText);

        let matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;

        if (matchesSearch && matchesCategory) {

            card.style.display = "block";
            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });

    if (visibleCount === 0) {
        noResult.style.display = "block";
    } else {
        noResult.style.display = "none";
    }

}

const detailBtns = document.querySelectorAll(".details-btn");

detailBtns.forEach(function(btn) {

    btn.addEventListener("click", function() {

        let gameName = btn.getAttribute("data-game");

        modalTitle.innerHTML = gameName;

        modal.classList.add("show");

    });

});

closeModal.addEventListener("click", function() {

    modal.classList.remove("show");

});

modalOk.addEventListener("click", function() {

    modal.classList.remove("show");

});

modal.addEventListener("click", function(event) {

    if (event.target === modal) {
        modal.classList.remove("show");
    }

});
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        modal.classList.remove("show");
    }

});
