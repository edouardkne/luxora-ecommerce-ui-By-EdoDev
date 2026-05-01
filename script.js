"use strict";

/* =========================
   GLOBAL UTILITIES
========================= */

// Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


/* =========================
   NAVBAR EFFECT ON SCROLL
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


/* =========================
   MOBILE MENU TOGGLE
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });
}


/* =========================
   PRODUCT CARD ANIMATIONS
========================= */

const cards = document.querySelectorAll(".product-card, .card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";
    observer.observe(card);
});


/* =========================
   PRODUCT IMAGE GALLERY
========================= */

function changeImage(el) {
    const mainImage = document.getElementById("main-image");
    if (mainImage) {
        mainImage.src = el.src;
    }
}

window.changeImage = changeImage;


/* =========================
   TABS SYSTEM (PRODUCT PAGE)
========================= */

function openTab(tabId) {
    const contents = document.querySelectorAll(".tab-content");
    const tabs = document.querySelectorAll(".tab");

    contents.forEach(c => c.classList.remove("active"));
    tabs.forEach(t => t.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");

    event.target.classList.add("active");
}

window.openTab = openTab;


/* =========================
   CONTACT FORM VALIDATION
========================= */

const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            statusText.textContent = "Please fill all fields.";
            statusText.style.color = "red";
            return;
        }

        statusText.textContent = "Message sent successfully ✔";
        statusText.style.color = "limegreen";

        form.reset();
    });
}


/* =========================
   BUTTON RIPPLE EFFECT
========================= */

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");
        ripple.classList.add("ripple");

        const rect = this.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});


/* =========================
   PRODUCT PRICE HOVER UX (SUBTLE FEEL)
========================= */

document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.8)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.6)";
    });
});


/* =========================
   SIMPLE LOADING EXPERIENCE
========================= */

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});


/* =========================
   SMOOTH PAGE FADE-IN
========================= */

document.body.style.opacity = "0";
document.body.style.transition = "0.6s ease";



/* =========================
   SCROLL REVEAL FOR SECTIONS
========================= */

const sections = document.querySelectorAll(".section, .cta, .trust-bar");

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(40px)";
    sec.style.transition = "0.8s ease";
    sectionObserver.observe(sec);
});

const allLinks = document.querySelectorAll(".nav-links a, .mobile-menu a");

function setActiveLink() {
    const currentPage = window.location.pathname.split("/").pop();

    allLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
}

setActiveLink();