const slides = [
    {
        src: './assets/images/slideshow/slide1.jpg',
        alt: 'Impressions tous formats <span>en boutique et en ligne</span>'
    },
    {
        src: './assets/images/slideshow/slide2.jpg',
        alt: 'Tirages haute définition grand format <span>pour vos bureaux et events</span>'
    },
    {
        src: './assets/images/slideshow/slide3.jpg',
        alt: 'Grand choix de couleurs <span>de CMJN aux pantones</span>'
    },
    {
        src: './assets/images/slideshow/slide4.png',
        alt: 'Autocollants <span>avec découpe laser sur mesure</span>'
    }
];

const carousel = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots'); 

let currentSlide = 3;


function createDots() {
    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === currentSlide) {
            dot.classList.add('dot_selected');
        }
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
        dotsContainer.appendChild(dot);
    });
}

function showSlide(index) {
    carousel.src = slides[index].src;
    carousel.alt = slides[index].alt;
    
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    console.log(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

createDots();
showSlide(currentSlide);

arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);