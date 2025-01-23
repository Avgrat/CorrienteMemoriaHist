let currentIndex = 0;

const totalItems = document.querySelectorAll('.carousel-item').length;
const itemsPerSlide = 3;
const carousel = document.querySelector('.carousel');

function moveCarousel() {
    if (currentIndex >= totalItems - itemsPerSlide) {
        currentIndex = 0;
    } else {
        currentIndex += itemsPerSlide;
    }
    const offset = -(currentIndex * 33.33);
    carousel.style.transform = `translateX(${offset}%)`;
}

setInterval(moveCarousel, 3000);

