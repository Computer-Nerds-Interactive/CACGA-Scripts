// Remove Dark Overlay from Home Hero
const targetDiv = document.querySelector('div.d-flex.align-items-center.position-relative.pt-5.dark-overlay[style="background-color: #EDEDED"]');
if (targetDiv) {
    targetDiv.classList.remove('dark-overlay');
}