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
  
    
  /*
  // Helper to set a cookie with a 30-second expiration for testing purposes
  function setCookie(name, value) {
    let date = new Date();
    date.setTime(date.getTime() + 30 * 1000); // Set to expire in 30 seconds
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  }
*/

  document.addEventListener("DOMContentLoaded", function() {
    const videoWrapper = document.querySelector('.intro-animated_container');
    
    // Check if the user is visiting the page for the first time
    if (!getCookie("visitedBefore")) {
      // If this is the first visit, show the video wrapper
      if (videoWrapper) {
        videoWrapper.style.display = 'block';

        // Set the video duration to 11 seconds (11,000 milliseconds)
        const videoDuration = 11000; 

        // Fade out after the video ends
        setTimeout(function() {
          videoWrapper.style.transition = 'opacity 0.3s ease-out';
          videoWrapper.style.opacity = '0';

          // Hide the wrapper after the fade-out
          setTimeout(function() {
            videoWrapper.style.display = 'none';
          }, 300); // Fade-out duration of 0.3 seconds
        }, videoDuration);
      }

      // Set a cookie so this won't run on the user's next visit
      setCookie("visitedBefore", "true"); // No need to specify expiration here, already handled
    }
  });