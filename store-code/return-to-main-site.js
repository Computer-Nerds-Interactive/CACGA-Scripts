// Add return to main site link in nav 
  document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('#classicNav');
    if (nav) {
      const newItem = document.createElement('li');
      newItem.className = 'nav-item';
      newItem.innerHTML = `<a class="nav-link" href="https://www.artsglenallen.com/">Return To Main Site</a>`;
      nav.appendChild(newItem);
    }
  });