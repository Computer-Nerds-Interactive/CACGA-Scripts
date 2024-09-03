// Function to run code based on window size
function handleWindowResize() {
    console.log('Handling window resize...'); // Debugging statement

    const slider = document.querySelector('.home-hero_slider');
    const slideNav = document.querySelector('.home-hero_slide-nav');
    const slideLeftArrow = document.querySelector('.home-hero_slide-left-arrow');
    const slideRightArrow = document.querySelector('.home-hero_slide-right-arrow'); 

    // Check if the slider exists
    if (slider) {
        console.log('Slider found.'); // Debugging statement
        const slides = slider.querySelectorAll('.w-slide');
        const numberOfSlides = slides.length;

        if (window.innerWidth <= 768) {
            console.log('Small screen detected.'); // Debugging statement
            const newSlideLeftArrowPosition = (numberOfSlides * 22) + 60 + 'px';
            const newSlideRightArrowPosition = (numberOfSlides * 22) + 62 + 'px';
            slideLeftArrow.style.right = newSlideLeftArrowPosition;
            slideRightArrow.style.left = newSlideRightArrowPosition;
        } else {
            console.log('Large screen detected.'); // Debugging statement
            const newSlideNavWidth = (numberOfSlides * 22) + 118 + 'px';
            const newSlideLeftArrowPosition = (numberOfSlides * 22) + 65 + 'px';
            slideNav.style.width = newSlideNavWidth;
            slideLeftArrow.style.right = newSlideLeftArrowPosition;
            // No adjustment for slideRightArrow on larger screens
        }

        // Log the number of slides and calculated values to the console
        console.log('Number of slides:', numberOfSlides);
        console.log('Slide Nav Width:', slideNav.style.width);
        console.log('Slide Left Arrow Position:', slideLeftArrow.style.right);
        console.log('Slide Right Arrow Position:', slideRightArrow ? slideRightArrow.style.left : 'Not found');
    } else {
        console.log('Slider not found.');
    }
}

// Run the function on load
handleWindowResize();

// Run the function whenever the window is resized
window.addEventListener('resize', handleWindowResize);
