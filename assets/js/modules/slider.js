import { catalogue } from "./catalogue";

const slider = document.getElementById('slider');
const prevButton = document.getElementById('left'); // Renommé en "left" pour correspondre à l'ID de votre bouton
const nextButton = document.getElementById('right'); // Renommé en "right" pour correspondre à l'ID de votre bouton
let currentIndex = 0;

function updateSlider() {
  slider.innerHTML = `
    <div class="slider-item">
      <img src="${catalogue[currentIndex].url}" alt="${catalogue[currentIndex].title}">
      <div class="text-overlay">
        <h3>${catalogue[currentIndex].title}</h3>
        <p>${catalogue[currentIndex].description}</p>
      </div>
    </div>
  `;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % catalogue.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + catalogue.length) % catalogue.length;
  updateSlider();
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Automatically change the slide every 4 seconds
setInterval(nextSlide, 4000);

// Initial slider setup
updateSlider();
