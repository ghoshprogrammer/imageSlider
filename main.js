const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let slideIndex = 0;

slides[slideIndex].classList.add('active');

prev.addEventListener('click', () => {
    slides[slideIndex].classList.remove('active');
    slideIndex=(slideIndex===0) ? slides.length-1 : slideIndex - 1
    slides[slideIndex].classList.add('active')
    slider.style.transform=`translateX(-${slideIndex * 100}%)`
})

next.addEventListener('click', () => {
    slides[slideIndex].classList.remove('active');
    slideIndex=(slideIndex===slides.length-1) ? 0 : slideIndex + 1
    slides[slideIndex].classList.add('active')
    slider.style.transform=`translateX(-${slideIndex * 100}%)`
})