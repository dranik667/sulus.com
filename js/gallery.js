// Empty state
const galleryGrid = document.getElementById('gallery-grid');
const emptyState = document.getElementById('empty-state');

if (!galleryGrid || galleryGrid.children.length === 0) {
  emptyState.style.display = 'flex';
} else {
  emptyState.style.display = 'none';
}

// Lightbox
const lightbox = document.getElementById('lightbox');
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    lightbox.classList.add('show');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('show');
});