/* =========================
   MOBILE MENU
========================= */

const menuButton = document.querySelector("#menu-button");
const navbar = document.querySelector(".navbar");

menuButton.addEventListener("click", function () {

    navbar.classList.toggle("show-menu");

    const icon = menuButton.querySelector("i");

    if (navbar.classList.contains("show-menu")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("show-menu");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   DARK / LIGHT MODE
========================= */

const themeButton = document.querySelector("#theme-button");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    const icon = themeButton.querySelector("i");

    if (document.body.classList.contains("light-mode")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


/* =========================
   SKILL ANIMATION
========================= */

const skillBars = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const bar = entry.target;

                bar.style.width = bar.getAttribute("data-width");

            }

        });

    },
    {
        threshold: 0.5
    }
);


skillBars.forEach(function (bar) {

    let width = "";

    if (bar.classList.contains("python")) {
        width = "80%";
    }

    if (bar.classList.contains("html")) {
        width = "90%";
    }

    if (bar.classList.contains("css")) {
        width = "85%";
    }

    if (bar.classList.contains("javascript")) {
        width = "75%";
    }

    bar.setAttribute("data-width", width);

    skillObserver.observe(bar);

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    const formMessage = document.querySelector("#form-message");


    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "Please fill all fields.";
        formMessage.style.color = "#ef4444";

        return;
    }


    if (!email.includes("@")) {

        formMessage.textContent = "Please enter a valid email.";
        formMessage.style.color = "#ef4444";

        return;
    }


    formMessage.textContent =
        "Message submitted successfully!";

    formMessage.style.color = "#22c55e";


    contactForm.reset();

});
