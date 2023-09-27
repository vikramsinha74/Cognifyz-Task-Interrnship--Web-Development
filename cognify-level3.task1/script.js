const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');
const slideshowImages = document.querySelectorAll('.slideshow-image');

let currentSlide = 0;

function showSlide(slideIndex) {
    slideshowImages.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        mainImage.src = thumbnail.src;
        mainImage.classList.add('enlarged');
        showSlide(index);
        currentSlide = index;
    });
});

mainImage.addEventListener('click', () => {
    mainImage.classList.remove('enlarged');
});

function nextSlide() {
    currentSlide = (currentSlide + 1) % slideshowImages.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Auto transition every 3 seconds
