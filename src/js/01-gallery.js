// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);
const refs = {
    galleryEl: document.querySelector('.gallery'),
  };
  
  function galleryMarkup(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" /></a></li>`;
      })
      .join('');
  }
  
  refs.galleryEl.innerHTML = galleryMarkup(galleryItems);
  
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });                  