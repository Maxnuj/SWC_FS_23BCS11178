const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const carousel = document.getElementById("carousel");

let currentIndex = 0;
let autoSlide;

// Show slide
function showSlide(index){

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

// Next Slide
function nextSlide(){

    currentIndex++;

    if(currentIndex >= slides.length){
        currentIndex = 0;
    }

    showSlide(currentIndex);
}

// Previous Slide
function prevSlide(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = slides.length - 1;
    }

    showSlide(currentIndex);
}

// Buttons
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto Slide
function startAutoSlide(){

    autoSlide = setInterval(() => {
        nextSlide();
    }, 3000);
}

// Stop Auto Slide
function stopAutoSlide(){
    clearInterval(autoSlide);
}

// Pause on Hover
carousel.addEventListener("mouseenter", stopAutoSlide);

carousel.addEventListener("mouseleave", startAutoSlide);

// Start initially
startAutoSlide();
