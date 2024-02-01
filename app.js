// Carousel functionality
const carousel = document.getElementById('carousel');
const slides = carousel.querySelectorAll('img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentSlide = 0;

function autoplay() {
  currentSlide = (currentSlide + 1) % slides.length;
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(autoplay, 3000); // Adjust interval as needed

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
});

// Responsive navigation
const nav = document.querySelector('nav');

function toggleNav() {
  nav.classList.toggle('show'); // Replace with your class for display
}

const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Menu';
toggleBtn.addEventListener('click', toggleNav);

document.querySelector('header').appendChild(toggleBtn);

// Additional enhancements (optional)
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  // Apply scroll-based effects here
});

const isMobile = /Mobi|Android/i.test(navigator.userAgent);

if (isMobile) {
  // Adjust layout or features for mobile devices
}
