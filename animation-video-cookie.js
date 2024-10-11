    function handleVideoAnimation() {
        const videoElement = document.querySelector('.intro-animated-video');
        if (videoElement) {
            console.log('Video is fading out.');
            // Fade out the video
            videoElement.style.opacity = '0';
            setTimeout(() => {
                videoElement.style.display = 'none';
                console.log('Video is now hidden.');
            }, 300); // Match the duration of the opacity transition
        } else {
            console.error('Video element not found.');
        }
    }

    // Check if CookieYes is loaded and then determine the consent status
    function checkCookieConsent() {
        if (typeof CookieYes !== 'undefined') {
            CookieYes.on("consent", function(consent) {
                console.log('Cookie consent checked:', consent);
                // Check if the user accepted cookies
                if (!consent.statistics) { // Adjust based on which cookies you're monitoring
                    const video = document.getElementById('home-animation');
                    if (video) {
                        video.addEventListener('ended', handleVideoAnimation);
                        console.log('Event listener added for video end.');
                    } else {
                        console.error('Video element with ID home-animation not found.');
                    }
                } else {
                    // If the user has accepted cookies, hide the video
                    const videoElement = document.querySelector('.intro-animated-video');
                    if (videoElement) {
                        videoElement.style.display = 'none';
                        console.log('Video hidden due to cookie consent.');
                    }
                }
            });
        } else {
            console.error('CookieYes not loaded.');
            const video = document.getElementById('home-animation');
            if (video) {
                video.addEventListener('ended', handleVideoAnimation);
                console.log('Event listener added for video end (fallback).');
            } else {
                console.error('Video element with ID home-animation not found (fallback).');
            }
        }
    }

    // Wait for CookieYes script to load before checking consent
    document.addEventListener("DOMContentLoaded", function() {
        checkCookieConsent();
    });
