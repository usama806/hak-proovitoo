// Counter
let count = 1;
const interval = setInterval(() => {
  count = count >= 3 ? 1 : count + 1;
  document.getElementById("counter").innerText = count;
}, 1000);
// end

// slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.getElementById("slider");
const activeSlide = document.querySelector(".slide.active h3");
const sliderTitleHeight = activeSlide.offsetHeight;
const totalSlides = slides.length;
const sliderHeight = slider.offsetHeight;

function updateSliderHeight() {
  const H3Hight = document.querySelector(".slide.active h3");
  const activeSlideHeight = H3Hight.offsetHeight;
  slider.style.height =
    sliderHeight - sliderTitleHeight + activeSlideHeight + "px";
  slider.style.transition = "height 2s ease";
}

function headerAnimation() {
  if (currentSlide <= 2) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add("active");
    updateSliderHeight();
  }
}
updateSliderHeight();
setInterval(headerAnimation, 5000);
//end
