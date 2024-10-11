
    function handleVideoAnimation() {
        const videoElement = document.querySelector('.intro-animated-video');
        if (videoElement) {
            console.log('Video is fading out.');
            // Start the fade-out process
            videoElement.style.opacity = '0'; // Change opacity to 0
            setTimeout(() => {
                videoElement.style.display = 'none'; // Set display to none after the transition
                console.log('Video is now hidden.');
            }, 300); // Match the duration of the opacity transition
        } else {
            console.error('Video element not found.');
        }
    }

    // Function to check cookie consent
    function checkCookieConsent() {
        console.log('Checking CookieYes consent...');
        if (typeof CookieYes !== 'undefined') {
            // Wait for the CookieYes script to load
            CookieYes.on("consent", function(consent) {
                console.log('Cookie consent checked:', consent);

                // Check if the user accepted or rejected uncategorized cookies
                if (consent.uncategorized) {
                    // User accepted uncategorized cookies; add the event listener to the video
                    const video = document.getElementById('home-animation');
                    if (video) {
                        video.addEventListener('ended', handleVideoAnimation);
                        console.log('Event listener added for video end (accepted).');
                    } else {
                        console.error('Video element with ID home-animation not found (accepted).');
                    }
                } else {
                    // User rejected uncategorized cookies; play video every time
                    const video = document.getElementById('home-animation');
                    if (video) {
                        video.style.display = 'block';
                        video.style.opacity = '1'; // Reset opacity for visibility
                        console.log('Video displayed again due to cookie rejection.');
                    } else {
                        console.error('Video element with ID home-animation not found (rejected).');
                    }
                }
            });
        } else {
            console.error('CookieYes not loaded.');
            // Fallback behavior if CookieYes isn't loaded
            const video = document.getElementById('home-animation');
            if (video) {
                video.addEventListener('ended', handleVideoAnimation);
                console.log('Event listener added for video end (fallback).');
            } else {
                console.error('Video element with ID home-animation not found (fallback).');
            }
        }
    }

    // Wait for the page to load before checking for CookieYes
    window.onload = function() {
        setTimeout(checkCookieConsent, 500); // Add a delay to ensure CookieYes is fully loaded
    };
