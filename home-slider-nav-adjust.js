// Select the slider element with class .home-hero_slider
const slider = document.querySelector('.home-hero_slider');
const slideNav = document.querySelector('.home-hero_slide-nav');
const slideLeftArrow = document.querySelector('.home-hero_slide-left-arrow');

// Check if the slider exists
if (slider) {
    // Select all slide elements within the slider
    const slides = slider.querySelectorAll('.w-slide');

    // Count the number of slides
    const numberOfSlides = slides.length;

    // Calculate the new width for slideNav and position for slideLeftArrow
    const newSlideNavWidth = (numberOfSlides * 22) + 118 + 'px';
    const newSlideLeftArrowPosition = (numberOfSlides * 22) + 65 + 'px';

    // Apply the calculated values to the elements
    slideNav.style.width = newSlideNavWidth;
    slideLeftArrow.style.right = newSlideLeftArrowPosition;

    // Log the number of slides and calculated values to the console
    console.log('Number of slides:', numberOfSlides);
    console.log('Slide Nav Width:', newSlideNavWidth);
    console.log('Slide Left Arrow Position:', newSlideLeftArrowPosition);
} else {
    console.log('Slider not found.');
}
