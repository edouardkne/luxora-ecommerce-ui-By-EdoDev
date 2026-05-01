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