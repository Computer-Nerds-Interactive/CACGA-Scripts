//Prevents Orphans for Main Headings in Homepage Slider

document.querySelectorAll('.home-hero_heading-new, .home-hero_sub-heading').forEach(element => {
    // Get the text content of the element
    const text = element.textContent.trim();
    
    // Split the text into words
    const words = text.split(' ');

    // Check if there are at least two words
    if (words.length >= 2) {
        // Get the last two words
        const lastTwoWords = words.slice(-2).join(' ');
        
        // Get the rest of the text without the last two words
        const restOfText = words.slice(0, -2).join(' ');

        // Create a new span element with the last two words
        const span = document.createElement('span');
        span.className = 'no-wrap';
        span.textContent = lastTwoWords;

        // Clear the original element's text
        element.textContent = '';

        // Append the rest of the text and the new span
        element.appendChild(document.createTextNode(restOfText + ' '));
        element.appendChild(span);
    }
});