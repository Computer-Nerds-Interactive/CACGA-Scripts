// Helper to get cookie value by name
function getCookie(name) {
  let value = `; ${document.cookie}`;
  let parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// Helper to set a cookie with a 50-year expiration
function setCookie(name, value) {
  let date = new Date();
  date.setFullYear(date.getFullYear() + 50); // Set to expire in 50 years
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

document.addEventListener("DOMContentLoaded", function() {
  const videoWrapper = document.querySelector('.intro-animated_container');
  const skipButton = document.querySelector('.intro-animated_skip-button');

  // Check if the user is visiting the page for the first time
  if (!getCookie("visitedBefore")) {
    // If this is the first visit, show the video wrapper
    if (videoWrapper) {
      videoWrapper.style.display = 'block';
      videoWrapper.style.transition = 'opacity 0.3s ease-out';
      videoWrapper.style.opacity = '1';

      // Set the video duration to 11 seconds (11,000 milliseconds)
      const videoDuration = 11000;

      // Fade out after the video ends
      const fadeOut = () => {
        videoWrapper.style.transition = 'opacity 0.3s ease-out';
        videoWrapper.style.opacity = '0';

        // Hide the wrapper after the fade-out
        setTimeout(() => {
          videoWrapper.style.display = 'none';
        }, 300); // Fade-out duration of 0.3 seconds
      };

      // Set timeout to fade out after the video duration
      const timeoutId = setTimeout(fadeOut, videoDuration);

      // Add event listener for the skip button
      if (skipButton) {
        skipButton.addEventListener('click', () => {
          clearTimeout(timeoutId); // Cancel the fade-out timeout
          fadeOut(); // Immediately fade out
        });
      }
    }

    // Set a cookie so this won't run on the user's next visit
    setCookie("visitedBefore", "true");
  }
});
