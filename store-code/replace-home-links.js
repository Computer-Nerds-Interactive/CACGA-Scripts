// Update <a> with text "Home"
for (const link of document.querySelectorAll('a')) {
  if (link.textContent.trim() === 'Home') {
    link.href = 'https://www.artsglenallen.com/';
    break; // stop after first match
  }
}

/* Remove for Now

// Update <a class="navbar-brand">
const brandLink = document.querySelector('a.navbar-brand');
if (brandLink) {
  brandLink.href = 'https://www.artsglenallen.com/';
}
  
*/
