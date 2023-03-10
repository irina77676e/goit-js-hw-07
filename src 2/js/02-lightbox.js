import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const markup = createGalleryMarkup(galleryItems);

galleryRef.addEventListener('click', onGallaryClick);
galleryRef.insertAdjacentHTML('beforeend', markup);

function createGalleryMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${preview}">
  <img class="gallery__image" src="${original}" alt="${description}" />
</a>`
  }).join('');
}

function onGallaryClick(e) {
  e.preventDefault();
  
  const isGallarySwatchEl = e.target.classList.contains('gallery__image');
  if (!isGallarySwatchEl) {
    return;
  };
  modalOpen(e)
}

let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250'});
gallery.on('show.simplelightbox', function () {
	// Do something…
});
  
function closeModalOnEsc(e) {
    if (e.code !== 'Escape') {
      return
    }
    console.log('key');
    modal.close();
    window.removeEventListener('keydown', closeModalOnEsc);
  }
  window.addEventListener('keydown', closeModalOnEsc);
  
