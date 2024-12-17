const menuToggle = document.getElementById("mobile-menu");
const navItems = document.querySelector(".nav_items");

menuToggle.addEventListener("click", () => {
  navItems.classList.toggle("active");  
  menuToggle.classList.toggle("open");
  
  
  const navLinks = document.querySelectorAll('.nav_items a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navItems.classList.remove('active');
    });
  });
});

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

// Navigation Buttons
document.getElementById("nextSlide").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    updateDots();
});

document.getElementById("prevSlide").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    updateDots();
});

// Initialize Slider
createDots();
showSlide(currentSlide);