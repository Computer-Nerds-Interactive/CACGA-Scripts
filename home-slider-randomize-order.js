document.addEventListener("DOMContentLoaded", function() {
    // Select the slider mask and slides
    const sliderMask = document.querySelector('.home-hero_slider-mask');
    const slides = Array.from(sliderMask.querySelectorAll('.home-hero_slide'));

    // Shuffle the slides array
    for (let i = slides.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [slides[i], slides[j]] = [slides[j], slides[i]];
    }

    // Append slides back to the slider mask in the new random order
    slides.forEach(slide => sliderMask.appendChild(slide));
  });