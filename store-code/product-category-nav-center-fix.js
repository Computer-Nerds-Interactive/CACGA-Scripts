// Fix Centering on Products Page Without Category Slector
const sidebar = document.querySelector('.sidebar.d-none.d-lg-block.col-xl-3.col-lg-4');

if (sidebar && sidebar.children.length === 0) {
  const grid = document.querySelector('.products-grid.col-xl-9.col-lg-8');
  if (grid) {
    grid.className = '';
  }
}