// ================= MOBILE MENU =================

const menuOpenButton =
    document.querySelector("#menu-open-button");

const menuCloseButton =
    document.querySelector("#menu-close-button");


menuOpenButton.addEventListener("click", () => {

    document.body.classList.add("show-mobile-menu");

});


menuCloseButton.addEventListener("click", () => {

    document.body.classList.remove("show-mobile-menu");

});


// Close menu when clicking navigation links

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        document.body.classList.remove("show-mobile-menu");

    });

});


// ================= SWIPER =================

const swiper = new Swiper(".slider-container", {

    loop: true,

    spaceBetween: 25,

    grabCursor: true,


    pagination: {

        el: ".swiper-pagination",

        clickable: true

    },


    navigation: {

        nextEl: ".swiper-button-next",

        prevEl: ".swiper-button-prev"

    },


    breakpoints: {

        0: {

            slidesPerView: 1

        },

        768: {

            slidesPerView: 2

        },

        1024: {

            slidesPerView: 3

        }

    }

});


// ================= CONTACT FORM =================

const contactForm =
    document.querySelector("#contact-form");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});