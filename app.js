// Get HTML elements

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");


// Mobile Navigation Menu

menuIcon.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    // Change menu icon

    if (navLinks.classList.contains("active")) {
        menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});


// Close menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


// Automatically update footer year

document.getElementById("year").textContent =
    new Date().getFullYear();