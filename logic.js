var navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (navLink) {
    navLink.addEventListener("mouseover", function () {
        this.style.backgroundColor = "#2B3A67";
        this.style.color = "white";
        this.style.borderRadius = "0.5rem";
    });

    navLink.addEventListener("mouseout", function () {
        this.style.backgroundColor = "";
        this.style.color = "";
        // this.style.borderRadius = "";
    });
});

var listLinks = document.querySelectorAll(".dropdown-item");

listLinks.forEach(function (listLink) {
    listLink.addEventListener("mouseover", function () {
        this.style.backgroundColor = "#B7245C";
        this.style.color = "white";
    });

    listLink.addEventListener("mouseout", function () {
        this.style.backgroundColor = "";
        this.style.color = "";
    });
});

let logo = document.querySelector(".navbar-brand");


logo.addEventListener("mouseover", function () {
    logo.style.display = "flex";
    logo.style.justifyContent = "center";
    logo.style.alignItems = "center";
    logo.style.borderRadius = "50%";
    logo.style.backgroundColor = "white";
});

logo.addEventListener("mouseout", function () {
    logo.style.display = "";
    logo.style.justifyContent = "";
    logo.style.alignItems = "";
    logo.style.borderRadius = "";
    logo.style.backgroundColor = "";
});

let logoF = document.querySelector("#logo");


logoF.addEventListener("mouseover", function () {
    logoF.style.display = "flex";
    logoF.style.justifyContent = "center";
    logoF.style.alignItems = "center";
    logoF.style.borderRadius = "50%";
    logoF.style.backgroundColor = "white";
});

logoF.addEventListener("mouseout", function () {
    logoF.style.display = "";
    logoF.style.justifyContent = "";
    logoF.style.alignItems = "";
    logoF.style.borderRadius = "";
    logoF.style.backgroundColor = "";
});

let git = document.querySelector("#git");


git.addEventListener("mouseover", function () {
    git.style.display = "flex";
    git.style.justifyContent = "center";
    git.style.alignItems = "center";
    git.style.borderRadius = "50%";
    git.style.backgroundColor = "white";
});

git.addEventListener("mouseout", function () {
    git.style.display = "";
    git.style.justifyContent = "";
    git.style.alignItems = "";
    git.style.borderRadius = "";
    git.style.backgroundColor = "";
});




