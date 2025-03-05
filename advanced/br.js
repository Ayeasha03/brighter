const menuToggle = document.getElementById("mobile-menu");
const navItems = document.querySelector(".nav_items");

// Debounce Function
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Apply Debounce to Menu Toggle
menuToggle.addEventListener("click", debounce(() => {
    navItems.classList.toggle("active");
    menuToggle.classList.toggle("open");

    const navLinks = document.querySelectorAll('.nav_items a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navItems.classList.remove('active');
        });
    });
}, 300));

const slides = document.querySelectorAll(".hero_slide");
const dotsContainer = document.querySelector(".dots-container");
let currentSlide = 0;

function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === currentSlide) dot.classList.add("active");
        dot.addEventListener("click", () => {
            currentSlide = index;
            showSlide(currentSlide);
            updateDots();
        });
        dotsContainer.appendChild(dot);
    });
}

// Show Slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

// Update Dots
function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentSlide);
    });
}


// Automatic Slide Transition
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    updateDots();
}, 5000); // Change slide every 5 seconds

// Initialize Slider
createDots();
showSlide(currentSlide);
