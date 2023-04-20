import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);
galleryContainer.addEventListener('click', onImgClick);

function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `<li class='gallery__item'>
  <a class ='gallery__link' href = ${original}>
    <img
      class='gallery__image'
      src = '${preview}'
      data-source = '${original}'
      alt = '${description}'
    />
  </a>
</li>`
    }).join('');
}

function onImgClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const IsItemImg = event.target.classList.contains('gallery__image');
    if (!IsItemImg) {
        return;
    }

    const currentImgUrl = event.target.dataset.source;

    const instance = basicLightbox.create(
        `<img src = '${currentImgUrl}' width='1280' height ='auto' />`,
    );
     instance.show();

    
}
console.log(galleryItems);
