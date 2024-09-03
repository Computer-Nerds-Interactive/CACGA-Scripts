// Function to run code based on window size
function handleWindowResize() {
    const slider = document.querySelector('.home-hero_slider');
    const slideNav = document.querySelector('.home-hero_slide-nav');
    const slideLeftArrow = document.querySelector('.home-hero_slide-left-arrow');
    const slideRightArrow = document.querySelector('.home-hero_slide-right-arrow'); 

    // Check if the slider exists
    if (slider) {
        const slides = slider.querySelectorAll('.w-slide');
        const numberOfSlides = slides.length;

        if (window.innerWidth <= 768) {
            // Code for small screens (e.g., mobile)
            const newSlideLeftArrowPosition = (numberOfSlides * 22) + 60 + 'px';
            const newSlideRightArrowPosition = (numberOfSlides * 22) + 62 + 'px';
            slideLeftArrow.style.right = newSlideLeftArrowPosition;
            slideRightArrow.style.left = newSlideRightArrowPosition;
        } else {
            // Code for larger screens (e.g., desktop)
            const newSlideNavWidth = (numberOfSlides * 22) + 118 + 'px';
            const newSlideLeftArrowPosition = (numberOfSlides * 22) + 65 + 'px';
            slideNav.style.width = newSlideNavWidth;
            slideLeftArrow.style.right = newSlideLeftArrowPosition;
        }
    } else {
        console.log('Slider not found.');
    }
}