// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryMarkup(galleryItems);
let elementImg;

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

lightbox.on('shown.simplelightbox', onModalWindowImageClick);

function onModalWindowImageClick() {
  elementImg = document.querySelector('.sl-image img');

  elementImg.addEventListener('click', () => {
    lightbox.close();
    removeModalImgListener();
  });
}

function removeModalImgListener() {
  elementImg.removeEventListener('click', () => {
    lightbox.close();
  });
}

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
          <img
             class="gallery__image"
             src="${preview}"             
             alt="${description}"
           />
        </a>`;
    })
    .join('');
}
