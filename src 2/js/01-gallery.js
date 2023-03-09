import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const markup = createGalleryMarkup(galleryItems);

galleryRef.addEventListener('click', onGallaryClick);
galleryRef.insertAdjacentHTML('beforeend', markup);

function createGalleryMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${preview}">
          <img
            class="gallery__image"
            src="${original}"
            data-source="${original}"
            alt="${description}"/>
        </a>
      </div>`;
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

function modalOpen(e) {
 
  const instance = basicLightbox.create(`
  <img src="${e.target.dataset.source}" width="800" height="600">
`);

  instance.show()

  function closeModalOnEsc(e) {
    if (e.code !== 'Escape') {
      return
    }
    console.log('key');
    modal.close();
    window.removeEventListener('keydown', closeModalOnEsc);
  }
  window.addEventListener('keydown', closeModalOnEsc);
  }
