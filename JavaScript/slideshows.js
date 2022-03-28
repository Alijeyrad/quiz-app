// Slideshows
let slideIndex = 1;
const slides = document.getElementsByClassName("mySlides");
const slideButtons = document.getElementsByClassName("demo");

const showDivs = (n) => {
  if (n > slides.length) {
    slideIndex = 1
  }    
  if (n < 1) {
    slideIndex = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (let i = 0; i < slideButtons.length; i++) {
    slideButtons[i].className = slideButtons[i].className.replace(" w3-red", "");
  }
  slides[slideIndex-1].style.display = "block";  
  slideButtons[slideIndex-1].className += " w3-red";
}

const plusDivs = (n) => {
  showDivs(slideIndex += n);
}

const minusDivs = (n) => {
  showDivs(slideIndex -= n);
}

const currentDiv = (n) => {
  showDivs(slideIndex = n);
}